// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjQwYmU3NWE1LWFmNDQtNDVhZS1hYjI1LTZiNjcxMTUyZjc4YiIsImlhdCI6MTY5OTUxMTk2OSwic3ViIjoiZGV2ZWxvcGVyL2Q1NTc4ZjVmLWI2NTgtM2QwYi00YTRiLTg0OTRjYjNmNTQwZCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEyMS4zNS4xODQuMTQwIl0sInR5cGUiOiJjbGllbnQifV19.isH4ZPT9CfWv313jICERxhyrnktjrqISqD9yhsErThHwgBZMAwYLbSp9L0IuJOVNpEfsigXshzC6KIhyuZRvPw
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
