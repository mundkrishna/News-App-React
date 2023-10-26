import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <div>
                        <span className="badge rounded-pill bg-danger"
                            style={{ display: "flex", justifyContent: "flex-end", position: "absolute" }}
                        >
                            {source}
                        </span>
                    </div>
                    <img
                        src={!imageUrl ? "https://www.livemint.com/lm-img/img/2023/10/21/1600x900/deded_1697896241977_1697896251852.jpg" : imageUrl}
                        className="card-img-top"
                        alt="..."
                        style={{ width: "415px", height: "260px" }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-danger">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank " className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
