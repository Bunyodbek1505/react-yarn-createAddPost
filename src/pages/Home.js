import React, {useEffect, useState} from 'react';
import {collection, getDocs, deleteDoc} from 'firebase/firestore'
import {db, auth} from "../firebase-config";
import {doc} from 'firebase/firestore'

const Home = ( {isAuth} ) => {

    const [postList, setPostList] = useState([])
    const postsCollectionRef = collection(db, 'post')

    useEffect(() =>{
        const getPosts= async ()=>{
            const data = await getDocs(postsCollectionRef)
            // console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        };
        getPosts()
    })

    const deletePost = async (id) =>{
        const postDoc = doc(db, 'post', id)
        await deleteDoc(postDoc)
    }

    return (
        <div className='homePage'>
            {
                postList.map((post) =>{
                    return(
                        <div className="post">
                            <div className="postHeader">
                                <div className="title">
                                    <h1> {post.title} </h1>
                                </div>
                                <div className="deletePost">
                                    {
                                        isAuth && post.author.id === auth.currentUser.uid && (
                                            <button onClick={ ()=>{deletePost(post.id)} }> x </button>
                                        )
                                    }

                                </div>
                            </div>

                            <div className="postTextContainer">
                                {post.postText}
                                <div>
                                    {/*<h3>@{post.author.name}</h3>*/}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Home;