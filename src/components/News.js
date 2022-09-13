import React, { Component } from 'react'
import NewsItem from './Newsitem'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - TechoNews `;
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=ca947e820ad14e72b80d8cd06fdcca51`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false, 
        })

    }
    async componentDidMount() {
        this.updateNews();
    }
    fetchMoreData = async () => {  
        this.setState({page: this.state.page + 1})
            const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=ca947e820ad14e72b80d8cd06fdcca51`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
      };
      

    render() {
        return (
            <>
                <h1  className="text-center" style={{ margin: '35px 0px', color: 'white' }}>TechoNews - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>

            </>
        )
    }
}

export default News
