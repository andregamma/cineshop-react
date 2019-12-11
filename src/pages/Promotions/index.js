import React, { Component } from 'react';
import CardPromotions from '../../components/CardPromotions';
import API from '../../services/api';

// import { Container } from './styles';

export default class Promotions extends Component {
    state = {
        promotion: [],
        promotionImage: []
    }
    componentDidMount() {
    API.get(`promotions`)
        .then(res => {
            const promotion = res.data;
            const promotionImage = res.data.image
            this.setState({ promotion, promotionImage });
        })
    }
  render() {
    return (
        <div className="container min-h-screen px-12 py-6 mx-auto">
            <span className="text-3xl font-hairline text-white">Promoções</span>
            <div className="flex flex-wrap overflow-hidden xl:-mx-3">
                {this.state.promotion.map((promotion, idx) => {
                const imageUrl = promotion.image.url
                const id = promotion.id
                return (
                    <CardPromotions 
                        key={idx}
                        id={id}
                        imageUrl={`http://localhost:1337${imageUrl}`}
                        position="top"
                        type="vertical"
                    />
                )
                })} 
            </div>
        </div>
    );
  }
}
