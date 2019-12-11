import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class CardPromotions extends Component {
  render() {
    const type = this.props.type
    return (
        <div className="w-2/6 overflow-hidden xl:my-3 xl:px-3">
            <Link to={`/promotions/${this.props.id}`}>
            <div className=
                {type === 'horizontal' ? ( 
                    'h-48 border rounded-lg border-lipstick-500 shadow-lipstick bg-blackpearl-900') 
                    : 
                    ('h-screen border rounded-lg border-lipstick-500 shadow-lipstick')
                }
                style={{
                    backgroundImage:
                    `url(${this.props.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: `${this.props.position}`
            }}></div></Link>
        </div>
    );
  }
}
