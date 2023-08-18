import * as postsDao from './posts-dao.js';

const PostsController = (app) => {
    app.get('/api/posts', findAllPosts)
    app.get('/api/posts/:uid', findPostById);
    app.post('/api/posts', createPost);
    app.delete('/api/posts/:uid', deletePost);
    app.put('/api/posts/:uid', updatePost);
    app.get('/api/postsreset', resetPosts);
}

const createPost = async (req, res) => {
  const newUser = await postsDao.createPost(req.body);
  res.json(newPost);
};

const deletePost = async (req, res) => {
  const id = req.params.id;
  const status = await postsDao.deletePost(id);
  res.json(status);
};

const updatePost = async (req, res) => {
  const id = req.params.id;
  const status = await postsDao.updatePost(id, req.body);
  const post = await postsDao.findPostById(id);
  res.json(status);
};

const findPostById = async (req, res) => {
  const id = req.params.id;
  const post = await postsDao.findPostById(id);
  res.json(post);
};

const findAllPosts = async (req, res) => {
    const parkId = req.params.parkId;
    if (parkId) {
      const posts = await postsDao.findPostsByParkId(parkId);
      req.json(posts);
    } else {
      const posts = await postsDao.findAllPosts();
      res.json(posts);
    }
};

const resetPosts = async (req, res) => {
  const status = await postsDao.deleteAllPosts();
  const status2 = await postsDao.addStarterPosts();
  res.sendStatus(200);
};

export default PostsController;