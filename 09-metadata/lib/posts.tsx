export type Post = {
    slug: string
    title: string
    description: string
  }
  
  export const posts: Post[] = [
    { slug: 'first-post', title: 'First Post', description: 'This is the first post.' },
    { slug: 'second-post', title: 'Second Post', description: 'This is the second post.' },
  ]