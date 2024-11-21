'use client'

import { useState } from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import "./css_files/ey_features_font_edit.css"

// Mock data for initial posts
const initialPosts = [
  {
    id: 1,
    author: 'Jane Doe',
    avatar: '/placeholder.svg?height=40&width=40',
    title: 'Advice needed on student loan repayment',
    content: 'I\'m struggling with my student loans. Any advice on repayment strategies?',
    tags: ['Student Loans', 'Debt'],
    likes: 5,
    comments: 2,
  },
  {
    id: 2,
    author: 'John Smith',
    avatar: '/placeholder.svg?height=40&width=40',
    title: 'Looking for funding for my startup',
    content: 'I have a great idea for a fintech startup. How can I secure initial funding?',
    tags: ['Startup', 'Funding'],
    likes: 8,
    comments: 3,
  },
]

export default function FinancialSupportPlatform() {
  const [posts, setPosts] = useState(initialPosts)
  const [newPost, setNewPost] = useState({ title: '', content: '', tags: '' })

  const handleNewPost = (e) => {
    e.preventDefault()
    const post = {
      id: posts.length + 1,
      author: 'Current User',
      avatar: '/placeholder.svg?height=40&width=40',
      title: newPost.title,
      content: newPost.content,
      tags: newPost.tags.split(',').map(tag => tag.trim()),
      likes: 0,
      comments: 0,
    }
    setPosts([post, ...posts])
    setNewPost({ title: '', content: '', tags: '' })
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 ey_title_font_color_and_family">Financial Community Support</h1>
      
      {/* New Post Form */}
      <Card className="mb-8 ey_desription_font_color_and_family">
        <CardHeader>
          <CardTitle>Create a New Post</CardTitle>
          <CardDescription>Ask for advice or funding support</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleNewPost} className="space-y-4">
            <Input
              placeholder="Title"
              value={newPost.title}
              onChange={(e) => setNewPost({...newPost, title: e.target.value})}
              required
            />
            <Textarea
              placeholder="What do you need help with?"
              value={newPost.content}
              onChange={(e) => setNewPost({...newPost, content: e.target.value})}
              required
            />
            <Input
              placeholder="Tags (comma-separated)"
              value={newPost.tags}
              onChange={(e) => setNewPost({...newPost, tags: e.target.value})}
            />
            <Button type="submit">Post</Button>
          </form>
        </CardContent>
      </Card>
      
      {/* Posts Feed */}
      <div className="space-y-6 ey_desription_font_color_and_family">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={post.avatar} alt={post.author} />
                  <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.author}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{post.content}</p>
              <div className="mt-4 space-x-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost">👍 {post.likes}</Button>
              <Button variant="ghost">💬 {post.comments}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
