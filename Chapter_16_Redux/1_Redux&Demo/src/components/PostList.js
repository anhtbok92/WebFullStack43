import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

class PostList extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    const { posts } = this.props;

    return posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />

          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>{this.renderList()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

// export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
// mapStateToProps : lấy các state từ store để component lấy dữ liệu đó hiển thị ra view
// mapDispatchToProps : lấy các Action truyền cho component, để user có thể tác động vào action -> từ action sẽ gọi reducer biến đổi state cũ thành state mới và trả về cho store
// Ở đây fetchPosts là 1 pure function và viết kiểu { fetchPosts } chính là return về 1 plain object
export default connect(mapStateToProps, { fetchPosts })(PostList);
