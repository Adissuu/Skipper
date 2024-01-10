#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
// Prevents additional console window on Windows in release, DO NOT REMOVE!!

use tauri_plugin_sql; // Add import statement for tauri_plugin_sql crate
fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_sql::Builder::default().build())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
