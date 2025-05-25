def read_file_text(given_path):
    from pathlib import Path
    # ./basic_javascript_file_add.html
    filepath = Path(given_path)

    file_content = filepath.read_text()

    # print(file_content)
    return file_content
