import Editor from '@monaco-editor/react'
import React from 'react'

const CodeQuestion = ({ listCodeAnswer, question, setListCodeAnswer }) => {
  const { id, title, description, code_assign } = question
  const code = listCodeAnswer[id] ? listCodeAnswer[id].code_assign : code_assign

  const handleCodeChane = (code) => {
    setListCodeAnswer((prev) => ({
      ...prev,
      [id]: {
        ...question,
        code,
      },
    }))
  }

  return (
    <div className="flex w-full">
      <div className="w-[40%] p-8">
        <h1 className="text-3xl font-bold text-gray-900/90">{title}</h1>
        <p className="mt-4 text-black font-medium">{description}</p>
      </div>
      <div className="flex-1 h-full flex flex-col bg-[#1e1e1e] pt-10">
        <Editor
          height="100vh"
          width={`100%`}
          language={'javascript'}
          value={code}
          theme="vs-dark"
          onChange={handleCodeChane}
        />
      </div>
    </div>
  )
}

export default CodeQuestion
