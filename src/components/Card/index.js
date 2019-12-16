import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Card extends Component {
  render() {
    const data = Array.from(Array(5), (e,i)=>i+1)
    const rating = []
    
    for(var i = 0; i < data.length; i++){
        rating.push(
        <svg key={i + 1} viewBox="0 0 24 24" className={`${i < this.props.rating  ? 'text-lipstick-500' : 'text-gray-600'} w-4 h-4 fill-current`}>
            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
        </svg>)
    }
    
    return (
        <>
        <div className="overflow-hidden md:w-1/3 xl:my-3 xl:px-3">
            <div className="flex flex-col justify-center p-16">
                <Link to="youtube.com" className="relative pb-5/6 hover:z-10">
                    <img className="object-cover w-full h-full rounded-lg shadow-md" src={this.props.imageUrl} alt={this.props.imageAlt} />
                </Link>
                <div className="z-0 px-4 -mt-16 text-white">
                    <div className="p-6 rounded-lg shadow-2xl bg-blackpearl-600">
                    <div className="flex flex-col items-baseline md:flex-row">
                        <span className="inline-block px-2 text-xs font-semibold tracking-wide text-white uppercase rounded-full bg-lipstick-500">Em cartaz</span>
                        <div className="text-xs font-semibold tracking-wide text-gray-700 uppercase md:ml-2">
                        { this.props.startDate } até { this.props.endDate }
                        </div>
                    </div>
                    <h4 className="mt-1 text-lg font-semibold leading-tight truncate">{ this.props.title }</h4>
                    <div className="mt-1">
                        <span className="text-sm">{ this.props.language }</span>
                    </div>
                    <div className="flex items-center mt-2">
                        {rating}
                        <span className="ml-2 text-sm text-gray-700">{ this.props.reviewCount } avaliações</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
  }
}
