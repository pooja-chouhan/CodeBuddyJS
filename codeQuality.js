// level {1/2/3}

// Level 2

 const getUsers = async () =>  {
    const doc = await Promise.all(getUser(), getProfile(), getPosts());
    return {
      user: doc[0],
      profile: doc[1],
      posts: doc[2]
    }
};


