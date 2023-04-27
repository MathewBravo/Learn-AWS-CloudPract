use std::fs;
use std::fs::File;
use std::io::Write;
use std::path::Path;

use serde::{Deserialize, Serialize};

#[derive(Deserialize, Serialize, Debug)]
struct FreshSave {
    modules: Vec<Modules>,
}
#[derive(Deserialize, Serialize, Debug)]
struct Modules {
    module: u32,
    value: u8,
}

#[tauri::command]
pub fn initiate_save_process() {
    if check_save_exists(String::from("./src/progress/saves/save01.json")) {
        println!("Save Exists already")
    } else {
        generate_save_file().expect("Could not generate save file");
    }
}

fn generate_save_file() -> Result<(), Box<dyn std::error::Error>> {
    if check_save_exists(String::from("./src/progress/saves/save01.json")) {
        todo!()
    } else {
        // Read the contents of freshsave.json
        let contents = fs::read_to_string("./src/progress/saves/freshsave.json")?;

        // Deserialize the contents into a SaveFile struct
        let save_file: FreshSave = serde_json::from_str(&contents)?;

        // Serialize the SaveFile struct to a JSON string
        let json_string = serde_json::to_string(&save_file)?;

        // Write the JSON string to the new file save01.json
        let mut file = File::create("./src/progress/saves/save01.json")?;
        file.write_all(json_string.as_bytes())?;

        Ok(())
    }
}

fn check_save_exists(path: String) -> bool {
    return Path::new(&path).exists();
}

#[test]
fn test_check_save_exists() {
    let result = check_save_exists(String::from("./src/progress/saves/freshsave.json"));
    assert!(result, "File does not exist");
}

#[test]
fn test_initiate_save_process() {
    initiate_save_process();
    let result = check_save_exists(String::from("./src/progress/saves/save01.json"));
    assert!(result, "File was not created");
}
