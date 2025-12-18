import React, { useState, useEffect } from 'react'

function DebouncedSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedTerm, setDebouncedTerm] = useState('') // 防抖后的值

  // 当用户输入时，更新 searchTerm
  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  // 监听 searchTerm 的变化，实现防抖
  useEffect(() => {
    // 设置一个定时器
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm) // 延迟一段时间后，将值赋给 debouncedTerm
      onSearch(searchTerm) // 执行搜索操作
    }, 500) // 500ms 延迟

    // 清理函数：在下一次副作用运行之前或组件卸载时清除定时器
    return () => {
      clearTimeout(handler)
    }
  }, [searchTerm, onSearch]) // 依赖 searchTerm 和 onSearch

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} placeholder="搜索..." />
      <p>正在搜索: {debouncedTerm}</p>
    </div>
  )
}

// 父组件使用示例
function ParentComponent() {
  const handleSearch = (query) => {
    console.log('执行搜索:', query)
    // 这里可以发起 API 请求
  }

  return <DebouncedSearch onSearch={handleSearch} />
}

export default ParentComponent
