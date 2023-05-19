import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default class NewsItem extends Component {
   
  render() {
    
    let {title,description,urlToImage,url,author,date,source}=this.props;
    return (
      <div>

    <Card className='border border-dark rounded-lg bg-dark text-light' >
      <div style={{
        display : 'flex',
        justifyContent : 'flex-end',
        position : 'absolute',
        right : '0'
      }}>
    <span class=" badge rounded-pill bg-dark text-success">{source}</span>
    </div>
      <Card.Img variant="top" src={!urlToImage?"https://staticc.sportskeeda.com/editor/2023/05/160b3-16830372486526-1920.jpg":urlToImage}/>
      <Card.Body>
        <Card.Title>{title}...</Card.Title>
        <Card.Text className=''> {description}...</Card.Text>
           <small className=" text-success"> By {!author?"Urfi jAved":author} on {new Date(date).toDateString()}</small> <br></br>
        <Button href={url} target='_blank' className='btn btn-sm  btn-outline-success mt-1' variant="dark">Know More</Button>
      </Card.Body>
    </Card>
  



      </div>
    )
  }
}
