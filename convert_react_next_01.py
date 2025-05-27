from langchain_core.prompts import ChatPromptTemplate
from langchain_ollama.llms import OllamaLLM
from langchain_community.document_loaders import TextLoader
from read_js_file import read_file_text
from dotenv import load_dotenv
import os
from langchain_core.output_parsers import StrOutputParser
import shutil

'''
Steps being followed:
1. Create the react app
2. Create an empty next project

Mappings of files followed:
src/App.tsx -> src/app/page.tsx
src/assets/	-> public/assets/

'''

load_dotenv()

def find_file_by_name(directory, target_filename):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower() == target_filename.lower():
                return os.path.join(root, file)
    return None

def process_files(react_project_path, nextjs_project_path):
    app_file_path = find_file_by_name(os.path.join(react_project_path, "src"), "app.tsx")
    
    if not app_file_path:
        raise FileNotFoundError("app.tsx not found in the React project's src directory")
    
    loader = TextLoader(app_file_path)
    document = loader.load()
    
    llm = OllamaLLM(model="llama3")
    
    prompt_template = ChatPromptTemplate.from_template('''
        Convert the following React component in app.tsx style to a Next.js page.tsx component with default export Home.
        Do not add any comments or anything, as the code is directly being written into a program.
        Since it is a next js project file, remember to follow all convention including client and server side rendering...
        \n\n
        Original code:\n{code}\n\n
        Converted Next.js page.tsx code:'''
    )
    
    chain = prompt_template | llm | StrOutputParser()
    
    converted_code = chain.invoke({"code": document[0].page_content})
    
    pages_dir = os.path.join(nextjs_project_path, "src/app")
    os.makedirs(pages_dir, exist_ok=True)
    destination_path = os.path.join(pages_dir, "page.tsx")
    
    with open(destination_path, "w") as f:
        f.write(converted_code)
    
    print(f"Successfully converted {app_file_path} to {destination_path}")
    
    # css_source_path = find_file_by_name(os.path.join(react_project_path, "src"), "index.css")
    
    # if css_source_path:
    #     # Determine CSS destination path
    #     css_dest_dir = os.path.join(nextjs_project_path, "app")
    #     os.makedirs(css_dest_dir, exist_ok=True)
    #     css_dest_path = os.path.join(css_dest_dir, "index.css")
        
    #     shutil.copyfile(css_source_path, css_dest_path)
    #     print(f"Successfully copied {css_source_path} to {css_dest_path}")
    # else:
    #     print("index.css not found in the React project's src directory")

if __name__ == "__main__":
    react_project = "./react_project_01/app01"
    nextjs_project = "./react_project_01/next-app01"
    process_files(react_project, nextjs_project)