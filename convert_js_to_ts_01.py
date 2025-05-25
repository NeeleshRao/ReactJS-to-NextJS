# using llama

from langchain_core.prompts import ChatPromptTemplate
from langchain_ollama.llms import OllamaLLM

template = '''
    Don't elaborate on anything, just print out the question and answer in the format requested.
    Question : What is the capital of {country}?
    Answer : The capital of {country} is 
'''

prompt = ChatPromptTemplate.from_template(template=template)

model = OllamaLLM(model="llama2")

chain = prompt | model

result = chain.invoke({'country' : "India"})

print(result)

