import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img
                        src={!imageUrl ? "https://www.livemint.com/lm-img/img/2023/10/21/1600x900/deded_1697896241977_1697896251852.jpg" : imageUrl}
                        className="card-img-top"
                        alt="..."
                        style={{ width: "415px", height: "260px" }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank " className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
