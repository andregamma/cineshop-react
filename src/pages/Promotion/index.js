import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import API from '../../services/api';

import CardPromotions from '../../components/CardPromotions';

const ReactMarkdown = require('react-markdown')

class Promotion extends Component {
  state = {
    promotion: [],
    promotionImage: []
  }
  componentDidMount() {
    const promotionId = this.props.match.params.id
    API.get(`promotions/${promotionId}`)
      .then(res => {
        const promotion = res.data;
        const promotionImage = res.data.image
        this.setState({ promotion, promotionImage });
      })
  }
  render() {
    const descriptionMk = this.state.promotion.description
    const imageUrl = this.state.promotionImage.url
    return (
        <div className="container min-h-screen px-12 py-6 mx-auto">
            <span className="text-3xl font-semibold text-white">{this.state.promotion.name}</span>
            <div className="flex overflow-hidden xl:-mx-3">
              <CardPromotions 
                id={this.state.promotion.id}
                imageUrl={`http://localhost:1337${imageUrl}`}
                position="top"
                type="vertical"
              />
              <div className="w-4/6 overflow-hidden text-white xl:my-3 xl:px-3">
                <ReactMarkdown source={descriptionMk} />
              </div>
            </div>
        </div>
    );
  }
}

export default withRouter(Promotion)
