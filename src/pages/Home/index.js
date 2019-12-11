import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import API from '../../services/api'

import Card from '../../components/Card';
import ImageHeader from '../../images/hd1.jpg'
import CardPromotions from '../../components/CardPromotions';

export default class Home extends Component {
    state = {
        showtime: [],
        showtimeImage: []
    }
    componentDidMount() {
    API.get(`showtimes`)
        .then(res => {
            const showtime = res.data;
            const showtimeImage = res.data.image
            this.setState({ showtime, showtimeImage });
            console.log(this.state.showtime)
        })
    }
  render() {
    return (
        <>
        <section id="hero">
            <img src={ImageHeader} alt="Header" />
        </section>
        <div className="container mx-auto">
            <section id="latest" className="relative flex flex-wrap -mt-48 overflow-hidden xl:-mx-3">
                {this.state.showtime.map((showtime, idx) => {
                    const imageUrl = showtime.background.url
                    const id = showtime.id
                    var options = { month: 'numeric', day: 'numeric' };
                    var dateStart = new Date(showtime.start_date)
                    var dateEnd = new Date(showtime.end_date)
                    return (
                        <Card 
                            imageUrl={`http://localhost:1337${imageUrl}`}
                            imageAlt="O Irlandês"
                            startDate={new Intl.DateTimeFormat('pt-BR', options).format(dateStart)}
                            endDate={new Intl.DateTimeFormat('pt-BR', options).format(dateEnd)}
                            beds="3"
                            title={showtime.title}
                            language={showtime.language}
                            rating={3}
                            reviewCount={4}
                        />
                    )
                    })}
            </section>
        </div>
        <section id="promotions" className="px-12 py-6">
            <span className="text-3xl font-hairline text-white">Promoções</span>
            <div className="flex flex-wrap overflow-hidden xl:-mx-3">
                <CardPromotions 
                    id="1"
                    imageUrl="https://scontent.fcgb2-1.fna.fbcdn.net/v/t1.0-9/79229026_2535503820109193_1443230262677733376_n.jpg?_nc_cat=101&_nc_ohc=98-Ac41nilYAQkVvDutP8eoJK-s5uS5jiPuVOectXSXji30hsI56bNbhw&_nc_ht=scontent.fcgb2-1.fna&oh=1a02633cb7b23988fd3cc6cd4fe4c6d2&oe=5E7D6CCD"
                    position="top"
                    type="horizontal"
                />
                <CardPromotions 
                    id="2"
                    imageUrl="https://scontent.fcgb2-1.fna.fbcdn.net/v/t1.0-9/s960x960/78532397_2531600920499483_5354669116722511872_o.jpg?_nc_cat=105&_nc_ohc=ODJHh1UYW6YAQlYyAF58bbf6WQpuaqR6ESrOGZAig5Sd4XQoWgIEo_DsA&_nc_ht=scontent.fcgb2-1.fna&oh=fac2e2502f79b8b7e712c2d343b1c5e7&oe=5E85135D"
                    position="center"
                    type="horizontal"
                />
                <CardPromotions
                    id="3"
                    imageUrl="https://scontent.fcgb2-1.fna.fbcdn.net/v/t1.0-9/s960x960/78879050_2529425584050350_5718004099920691200_o.jpg?_nc_cat=100&_nc_ohc=BabaSbJKa8gAQmi1PJ160T-qb8B_ZnPm9KDxZ-HRRLPDp9dLqkIlZY8-w&_nc_ht=scontent.fcgb2-1.fna&oh=f1aaf49e75361451ad9d292f19c0a62e&oe=5E830937"
                    position="center"
                    type="horizontal"
                />
            </div>
        </section>
        </>
    );
  }
}
