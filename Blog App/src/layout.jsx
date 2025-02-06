import { Outlet } from "react-router-dom"
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { createContext, useState } from "react";
export const BlogContext = createContext();
const blogPosts = [
    {
      id: 1,
     image: "https://media.wired.com/photos/644b1ee2a6c1fece8f4bb0d1/master/w_1280,c_limit/Ben-Smith-Jonah-Peretti-Plaintext-Business-1357479731.jpg",

      title: "BuzzFeed and Gawker Meme-ified Reality With This One Weird Trick",
      author: "Steven",
      content:"Ben Smith thought that he’d be spending the end of April banking interviews about his book that goes on sale next week. It’s not working out that way...",
      comments: [
        { user: 'User1', text: 'Great post!' },
        { user: 'User2', text: 'Very informative.' }]
    },
    {
      id: 2,
      image: "https://media.wired.com/photos/5f6e4db20621ecd5cce9718e/master/w_1280,c_limit/Journalist-Newsletters.jpg",
      title: "Peak Newsletter? That Was 80 Years Ago",
      author: "Michael Waters",
      content:"By the time Claud Cockburn resigned from his post as foreign correspondent for The Times of London, he’d grown sick of the newspaper’s conservative streak...",
      comments: [
        { user: 'User1', text: 'good!' },
        { user: 'User2', text: 'Very informative.' }]
    },
    {
      id: 3,
      image: "https://media.wired.com/photos/5e9a429db1d67d0009c2cdf9/3:2/w_1280,c_limit/feature-pandemic_blogosphere.jpg",
      title: "'Expert Twitter' Only Goes So Far. Bring Back Blogs",
      author: "Cal Newport",
      content:"About technology and the coronavirus pandemic. “This is a little bit flippant,” I told the reporter...",
      comments: [
        { user: 'User1', text: 'Great post!' },
        { user: 'User2', text: 'Very informative.' }]
    },
    {
      id: 4,
      image: "https://media.wired.com/photos/5ae09bfc0bea931b20b35a6f/master/w_1280,c_limit/JoyReid-576800016.jpg",
      title: "A Short History of Blaming 'Hackers' For Pretty Much Everything",
      author: "Steven",
      content:"Host Joy Reid has found herself embroiled in a familiar controversy. A Twitter user surfaced a number of homophobic posts...",
    
      comments: [
        { user: 'User1', text: 'Great post!' },
        { user: 'User2', text: 'Very informative.' }]},
    {
      id: 5,
      image: "https://media.wired.com/photos/644b1ee2a6c1fece8f4bb0d1/master/w_1280,c_limit/Ben-Smith-Jonah-Peretti-Plaintext-Business-1357479731.jpg",
      title: "BuzzFeed and Gawker Meme-ified Reality With This One Weird Trick",
      author: "Steven",
      content:"Ben Smith thought that he’d be spending the end of April banking interviews about his book that goes on sale next week. It’s not working out that way...",
    
      comments: [
        { user: 'User1', text: 'Great post!' },
        { user: 'User2', text: 'Very informative.' }]},
    {
      id: 6,
      image: "https://media.wired.com/photos/5f6e4db20621ecd5cce9718e/master/w_1280,c_limit/Journalist-Newsletters.jpg",
      title: "Peak Newsletter? That Was 80 Years Ago",
      author: "Michael Waters",
      content:"By the time Claud Cockburn resigned from his post as foreign correspondent for The Times of London, he’d grown sick of the newspaper’s conservative streak...",
      comments: [
        { user: 'User1', text: 'Great post!' },
        { user: 'User2', text: 'Very informative.' }]
    },
    {
      id: 7,
      image: "https://media.wired.com/photos/5e9a429db1d67d0009c2cdf9/3:2/w_1280,c_limit/feature-pandemic_blogosphere.jpg",
      title: "'Expert Twitter' Only Goes So Far. Bring Back Blogs",
      author: "Cal Newport",
         content: "About technology and the coronavirus pandemic. “This is a little bit flippant,” I told the reporter...",
   comments: [
        { user: 'User1', text: 'Great post!' },
        { user: 'User2', text: 'Very informative.' }]
    },
    {
      id: 8,
      image: "https://media.wired.com/photos/5ae09bfc0bea931b20b35a6f/master/w_1280,c_limit/JoyReid-576800016.jpg",
      title: "A Short History of Blaming 'Hackers' For Pretty Much Everything",
      author: "Steven",
      content:"Host Joy Reid has found herself embroiled in a familiar controversy. A Twitter user surfaced a number of homophobic posts...",
      comments: [
        { user: 'User1', text: 'Great post!' },
        { user: 'User2', text: 'Very informative.' }]
    },
    {
      id: 9,
      image: "https://media.wired.com/photos/644b1ee2a6c1fece8f4bb0d1/master/w_1280,c_limit/Ben-Smith-Jonah-Peretti-Plaintext-Business-1357479731.jpg",
      title: "BuzzFeed and Gawker Meme-ified Reality With This One Weird Trick",
      author: "Steven",
      content:"Ben Smith thought that he’d be spending the end of April banking interviews about his book that goes on sale next week. It’s not working out that way...",
      comments: [
        { user: 'User1', text: 'Great post!' },
        { user: 'User2', text: 'Very informative.' }]
    },
    {
      id: 10,
      image: "https://media.wired.com/photos/5f6e4db20621ecd5cce9718e/master/w_1280,c_limit/Journalist-Newsletters.jpg",
      title: "Peak Newsletter? That Was 80 Years Ago",
      author: "Michael Waters",
      content: "By the time Claud Cockburn resigned from his post as foreign correspondent for The Times of London, he’d grown sick of the newspaper’s conservative streak...",
      comments: [
        { user: 'User1', text: 'Great post!' },
        { user: 'User2', text: 'Very informative.' }]
    },
    {
      id: 11,
      image: "https://media.wired.com/photos/5e9a429db1d67d0009c2cdf9/3:2/w_1280,c_limit/feature-pandemic_blogosphere.jpg",
      title: "'Expert Twitter' Only Goes So Far. Bring Back Blogs",
      author: "Cal Newport",
      content:"About technology and the coronavirus pandemic. “This is a little bit flippant,” I told the reporter...",
      comments: [
        { user: 'User1', text: 'Great post!' },
        { user: 'User2', text: 'Very informative.' }]
    },
    
  ];
  const privateposts=[{
    id: 1,
    image: "https://media.wired.com/photos/5e9a429db1d67d0009c2cdf9/3:2/w_1280,c_limit/feature-pandemic_blogosphere.jpg",
    title: "'Expert Twitter' Only Goes So Far. Bring Back Blogs",
    author: "Cal Newport",
    content:"About technology and the coronavirus pandemic. “This is a little bit flippant,” I told the reporter...",
    comments: [
      { user: 'User1', text: 'Great post!' },
      { user: 'User2', text: 'Very informative.' }]
  },
  {
    id: 2,
    image: "https://media.wired.com/photos/5e9a429db1d67d0009c2cdf9/3:2/w_1280,c_limit/feature-pandemic_blogosphere.jpg",
    title: "'Expert Twitter' Only Goes So Far. Bring Back Blogs",
    author: "Cal Newport",
    content:"About technology and the coronavirus pandemic. “This is a little bit flippant,” I told the reporter...",
    comments: [
      { user: 'User1', text: 'Great post!' },
      { user: 'User2', text: 'Very informative.' }] },

  {
    id: 3,
    image: "https://media.wired.com/photos/5e9a429db1d67d0009c2cdf9/3:2/w_1280,c_limit/feature-pandemic_blogosphere.jpg",
    title: "'Expert Twitter' Only Goes So Far. Bring Back Blogs",
    author: "Cal Newport",
    content:"About technology and the coronavirus pandemic. “This is a little bit flippant,” I told the reporter...",
    comments: [
      { user: 'User1', text: 'Great post!' },
      { user: 'User2', text: 'Very informative.' }]},
  {
    id: 4,
    image: "https://media.wired.com/photos/5e9a429db1d67d0009c2cdf9/3:2/w_1280,c_limit/feature-pandemic_blogosphere.jpg",
    title: "'Expert Twitter' Only Goes So Far. Bring Back Blogs",
    author: "Cal Newport",
    content:"About technology and the coronavirus pandemic. “This is a little bit flippant,” I told the reporter...",
    comments: [
      { user: 'User1', text: 'Great post!' },
      { user: 'User2', text: 'Very informative.' }]},
 
  ]
export const Layout=()=>{
   
      const [data, setData] = useState(blogPosts);
      const [Privatepost,setPrivatepost]=useState(privateposts);
    return(
        <>
         
      <BlogContext.Provider value={{ data,setData,Privatepost,setPrivatepost}}>
      <Header/>
        <Outlet/>
        <Footer/>
 </BlogContext.Provider>
        
        </>
    )
}