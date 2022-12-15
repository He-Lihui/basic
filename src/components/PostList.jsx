import React,{ Component} from "react";
import PostItem from "./PostItem";
import "../style/PostList.css"
class PostList extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
        this.timer = null;
        this.handleVote = this.handleVote.bind(this);
    }
    componentDidMount () {
        this.timer = setTimeout( () => {
            this.setState({
                posts: [
                    {id: 1, title:"大家一起来讨论react吧", auther:"sasf", date:"20220101", vote: 0},
                    {id: 2, title:"前端框架，你最喜欢哪个？", auther:"asdasd", date:"20220101", vote: 0},
                    {id: 3, title:"Web App 时代已经到来", auther:"yqwe", date:"20220101", vote: 0}
                 ]
            })
        },1000 )
    }
    componentWillUnmount() {
        if(this.timer){
            clearTimeout(this.timer)
        }
    }
    handleVote(id){
        const posts = this.state.posts.map(item => {
            const newItem = item.id === id ? {...item, vote: ++item.vote} : item; 
            return newItem
        })
        this.setState({
            posts
        })
    }

    render() {
        return(
            <div>
            话题列表：
            <ul>
              {
                this.state.posts.map( item => 
                        <PostItem
                         post = {item}
                         onVote = {this.handleVote}
                    />)
              }
            </ul>
        </div>
        )
    }
}
export default PostList