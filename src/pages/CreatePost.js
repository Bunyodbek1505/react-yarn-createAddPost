import React, {useState , useEffect} from 'react';
import {addDoc,collection} from 'firebase/firestore'
import {db, auth} from "../firebase-config";
import {useNavigate} from "react-router-dom";

const CreatePost = ({isAuth}) => {
    const [title, setTitle] = useState("")
    const [postText, setPostText] = useState('')

    const postsCollactionRef = collection(db, 'post')
    const navigate = useNavigate()

    const createPost = async () => {
        await addDoc(postsCollactionRef, {
            title,
            postText,
            author:{name: auth.currentUser.displayName, id: auth.currentUser.uid}
        });
        navigate("/")
    };

    useEffect(() => {
        if(!isAuth){
            navigate('/login')
        }
    }, [])

    return (<>
            <div className='createPostPage'>
                <div className='cpContainer'>
                    <h1>Create Post</h1>
                    <div className="inputGp">
                        <label> Title: </label>
                        <input type="text" placeholder='title...'
                               onChange={(event) => {
                                   setTitle(event.target.value)
                        }}/>
                    </div>
                    <div className="inputGp">
                        <label> Post: </label>
                        <textarea type="text" placeholder='title...'
                                  onChange={(event) => {
                                      setPostText(event.target.value)
                                  }}/>
                    </div>
                    <button onClick={createPost}>Submit Post</button>
                </div>
            </div>
        </>);
};

export default CreatePost;