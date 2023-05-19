import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "react";
import Spinner from "react-bootstrap/Spinner";
 
import Button from "react-bootstrap/esm/Button";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pagesize: "6",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };
  capitalizefirstletter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      category:this.props.category,
      darkMode: false,
    };
    document.title = `${this.capitalizefirstletter(this.props.category)}` 
  }
  toggleDarkMode = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
  };
  async updateNews() {
    this.setState({ loading: true }); 
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e1649e611ae2410ab725f0db786469b6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json(); 
    this.setState((prevState)=>({
      articles: [...prevState.articles, ...parsedData.articles],
      totalResults: parsedData.totalResults,
      loading: false
    }));
  }

  async componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.updateNews();
    this.setState({ loading: false });
  }
  handleScroll = () => {
    const { loading, page } = this.state;
    if (loading) return;
  
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.pageYOffset;
  
    if (documentHeight - scrollPosition - windowHeight < 100) {
      this.setState({ page: page + 1 }, () => {
        this.updateNews();
      });
    }
  };
 

 

  render() {
    const {  darkMode } = this.state;
    return (
      <>
        <div  className={`container ${
          darkMode ? "container-dark" : "container-light"
        } mt-4`}>
          <center>
            <h2 className={`text-${darkMode ? "light" : "dark"}`}>News24x7- Top {this.capitalizefirstletter(this.props.category)} Headlines  </h2> 
          </center>
          <div className="container d-flex justify-content-between">
             <Button onClick={this.toggleDarkMode} variant="dark">
            {this.props.darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>
          {this.state.loading ? (
            <div className="text-center">
            <Spinner />
          </div>
          ) :(
            
            <div className="row my-3">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    urlToImage={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          )}
          
          
        </div>
      </>
    );
  }
}
