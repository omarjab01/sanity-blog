import { PortableText } from '@portabletext/react'
import CustomPortableText from '@/app/components/CustomPortableText'

const PostContent = ({post}) => {
  return (
    <div className="mt-8 containerPostContent">
        <PortableText value={post.content} components={CustomPortableText}/>
    </div>
  )
}

export default PostContent