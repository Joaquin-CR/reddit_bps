import Image from 'next/image';
import CommentsIcon from '../../../../public/Images/commentsIcon.svg';
import Dots from '../../../../public/Images/dots.svg';
import LikeImg from '../../../../public/Images/likeBTN.svg';
// import LikedImg from '../../../../public/Images/likedBTN.svg';
import SaveIcon from '../../../../public/Images/saveIcon.svg';
// import SavedIcon from '../../../../public/Images/savedIcon.svg';
import Avatar from '../../../../public/Images/avatar.jpg';
import testImg from '../../../../public/Images/imgTest.jpg';
import ShareIcon from '../../../../public/Images/shareIcon.svg';
import { UserPost } from '../../../../types';

export interface IPost {
  post: UserPost;
}
const Post: React.FC<IPost> = ({ post }) => {
  const LikeAction = () => {
    console.log('Like');
  };

  const CommentsAction = () => {
    console.log('Comments');
  };

  const SaveAction = () => {
    console.log('Save');
  };

  const content = (
    <>
      <div className="bg-bgColor-Card md:w-full mb-10 px-10 py-8 rounded drop-shadow-lg">
        {/* HEADER */}
        <div className="flex justify-between">
          <div className="flex items-center">
            <Image
              className="rounded-full w-6 h-6 mr-2"
              src={Avatar}
              alt="Avatar"
            />
            <p className="text-xs">{post.author}</p>
          </div>
          <div className="items-center">
            <Image
              className="w-6"
              src={LikeImg}
              alt={''}
              onClick={LikeAction}
            />
            {/* <Image src={LikedImg} alt={''} /> */}
            <p className="text-xs">{post.likesCount}</p>
          </div>
        </div>
        {/* BODY */}
        <div>
          <p className="hover:text-Color-HoverTitle font-semibold">
            {post.titles}
          </p>
          <div className="mt-7 w-full flex justify-center md:px-20">
            <Image src={testImg} alt="Body img" />
          </div>
        </div>
        {/* FOOTER */}
        <div className="flex justify-between mt-7">
          <div className="flex justify-between">
            <div className="flex justify-center items-center">
              <Image
                className="w-5 mr-2"
                src={CommentsIcon}
                alt="Comments Icon"
                onClick={CommentsAction}
              />
              <p className="text-xs">{post.coments.length} Comments</p>
            </div>
            <div className="flex justify-center items-center mx-5">
              <Image className="w-5 mr-2" src={ShareIcon} alt="Share Icon" />
              <p className="text-xs">Share</p>
            </div>
            <div className="flex justify-center items-center">
              {/* <Image src={SavedIcon} alt="Saved Icon" /> */}
              <Image
                className="w-5 mr-2"
                src={SaveIcon}
                alt="Save Icon"
                onClick={SaveAction}
              />
              <p className="text-xs">Save</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image className="w-6" src={Dots} alt="Options" />
          </div>
        </div>
      </div>
    </>
  );
  return content;
};

export default Post;
