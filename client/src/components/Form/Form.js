import React, {useState}  from 'react';
import FileBase  from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import {useStyle} from './styles';
import { createPost} from '../../actions/posts';

const Form = () => {
const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
const classes = useStyle();

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
}
const clear = () => {
    /* setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: ''});
 */}
    return (
        <> 
        <h1> Form</h1>
        <Paper className={classes.paper}>
        <form autocomplete="off" noValidate className= {`${classes.root} {classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">CReating A Memory</Typography>
        <TextField name="creator" variant='outlined' label="Creator" fullWidth value={postData.Creator} 
        onChange={(e) => setPostData({...postData, creator: e.target.value}) }/>
        <TextField name="title" variant='outlined' label="Title" fullWidth value={postData.Creator} 
        onChange={(e) => setPostData({...postData, creator: e.target.value}) }/>
        <TextField name="message" variant='outlined' label="Message" fullWidth value={postData.Creator} 
        onChange={(e) => setPostData({...postData, creator: e.target.value}) }/>
        <TextField name="tags" variant='outlined' label="Tags" fullWidth value={postData.Creator} 
        onChange={(e) => setPostData({...postData, creator: e.target.value}) }/>
        <div className={classes.fileInput}>
            <FileBase type="file" 
            multiple={false} 
            onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})} />
          
            </div>
        
       <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" fullWidth>Submit</Button>
       <Button variant="container" color="primary" size="small" onClick={clear} fullWidth>Clear</Button></form>
        </Paper>
        </>
        
        
    );
}

export default Form;