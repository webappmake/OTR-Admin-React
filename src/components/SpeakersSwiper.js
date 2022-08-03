import * as React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from "swiper";
import photoSpeakers from '../assets/img/AWS_LG_Cloud_Dev_Day_Speaker_Youngjoon_Jeong.png';


export default function SpeakersSwiper() {
    return (
            <Swiper
                className='speakers-swiper'
                navigation={true} 
                modules={[Navigation]} 
                loop={true}
                loopFillGroupWithBlank={true}
            >
                <SwiperSlide>
                    <h3 className='track-title bg-blue'>컨퍼런스룸</h3>
                    <section className='speakers'>
                        <div className='profile-wrapper'>
                            <img className='photo-speaker' src={photoSpeakers} alt="photoSpeakers"/>
                            <div className='profile'>
                                <h4 className='name'>
                                    <em>정영준 컨테이너 스페셜리스트</em>
                                    <span>SA, AWS</span>
                                </h4>
                                <p className='desc'>
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                </p>
                            </div>
                        </div>

                        <div className='profile-wrapper'>
                            <img className='photo-speaker' src={photoSpeakers} alt="photoSpeakers"/>
                            <div className='profile'>
                                <h4 className='name'>
                                    <em>정영준 컨테이너 스페셜리스트</em>
                                    <span>SA, AWS</span>
                                </h4>
                                <p className='desc'>
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                </p>
                            </div>
                        </div>

                        <div className='profile-wrapper'>
                            <img className='photo-speaker' src={photoSpeakers} alt="photoSpeakers"/>
                            <div className='profile'>
                                <h4 className='name'>
                                    <em>정영준 컨테이너 스페셜리스트</em>
                                    <span>SA, AWS</span>
                                </h4>
                                <p className='desc'>
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                </p>
                            </div>
                        </div>

                        <div className='profile-wrapper'>
                            <img className='photo-speaker' src={photoSpeakers} alt="photoSpeakers"/>
                            <div className='profile'>
                                <h4 className='name'>
                                    <em>정영준 컨테이너 스페셜리스트</em>
                                    <span>SA, AWS</span>
                                </h4>
                                <p className='desc'>
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                </p>
                            </div>
                        </div>

                        <div className='profile-wrapper'>
                            <img className='photo-speaker' src={photoSpeakers} alt="photoSpeakers"/>
                            <div className='profile'>
                                <h4 className='name'>
                                    <em>정영준 컨테이너 스페셜리스트</em>
                                    <span>SA, AWS</span>
                                </h4>
                                <p className='desc'>
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                </p>
                            </div>
                        </div>

                        <div className='profile-wrapper'>
                            <img className='photo-speaker' src={photoSpeakers} alt="photoSpeakers"/>
                            <div className='profile'>
                                <h4 className='name'>
                                    <em>정영준 컨테이너 스페셜리스트</em>
                                    <span>SA, AWS</span>
                                </h4>
                                <p className='desc'>
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                </p>
                            </div>
                        </div>
                    </section>                            
                </SwiperSlide>
                <SwiperSlide>
                    <h3 className='track-title bg-gray'>이벤트홀</h3>
                    <section className='speakers'>
                        <div className='profile-wrapper'>
                            <img className='photo-speaker' src={photoSpeakers} alt="photoSpeakers"/>
                            <div className='profile'>
                                <h4 className='name'>
                                    <em>정영준 컨테이너 스페셜리스트</em>
                                    <span>SA, AWS</span>
                                </h4>
                                <p className='desc'>
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                </p>
                            </div>
                        </div>

                        <div className='profile-wrapper'>
                            <img className='photo-speaker' src={photoSpeakers} alt="photoSpeakers"/>
                            <div className='profile'>
                                <h4 className='name'>
                                    <em>정영준 컨테이너 스페셜리스트</em>
                                    <span>SA, AWS</span>
                                </h4>
                                <p className='desc'>
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                </p>
                            </div>
                        </div>

                        <div className='profile-wrapper'>
                            <img className='photo-speaker' src={photoSpeakers} alt="photoSpeakers"/>
                            <div className='profile'>
                                <h4 className='name'>
                                    <em>정영준 컨테이너 스페셜리스트</em>
                                    <span>SA, AWS</span>
                                </h4>
                                <p className='desc'>
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                </p>
                            </div>
                        </div>

                        <div className='profile-wrapper'>
                            <img className='photo-speaker' src={photoSpeakers} alt="photoSpeakers"/>
                            <div className='profile'>
                                <h4 className='name'>
                                    <em>정영준 컨테이너 스페셜리스트</em>
                                    <span>SA, AWS</span>
                                </h4>
                                <p className='desc'>
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                </p>
                            </div>
                        </div>

                        <div className='profile-wrapper'>
                            <img className='photo-speaker' src={photoSpeakers} alt="photoSpeakers"/>
                            <div className='profile'>
                                <h4 className='name'>
                                    <em>정영준 컨테이너 스페셜리스트</em>
                                    <span>SA, AWS</span>
                                </h4>
                                <p className='desc'>
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                </p>
                            </div>
                        </div>

                        <div className='profile-wrapper'>
                            <img className='photo-speaker' src={photoSpeakers} alt="photoSpeakers"/>
                            <div className='profile'>
                                <h4 className='name'>
                                    <em>정영준 컨테이너 스페셜리스트</em>
                                    <span>SA, AWS</span>
                                </h4>
                                <p className='desc'>
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                </p>
                            </div>
                        </div>
                    </section>                            
                </SwiperSlide>
                <SwiperSlide>
                    <h3 className='track-title bg-orange'>살롱 드 서초</h3>
                    <section className='speakers'>
                        <div className='profile-wrapper'>
                            <img className='photo-speaker' src={photoSpeakers} alt="photoSpeakers"/>
                            <div className='profile'>
                                <h4 className='name'>
                                    <em>정영준 컨테이너 스페셜리스트</em>
                                    <span>SA, AWS</span>
                                </h4>
                                <p className='desc'>
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                </p>
                            </div>
                        </div>

                        <div className='profile-wrapper'>
                            <img className='photo-speaker' src={photoSpeakers} alt="photoSpeakers"/>
                            <div className='profile'>
                                <h4 className='name'>
                                    <em>정영준 컨테이너 스페셜리스트</em>
                                    <span>SA, AWS</span>
                                </h4>
                                <p className='desc'>
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                </p>
                            </div>
                        </div>

                        <div className='profile-wrapper'>
                            <img className='photo-speaker' src={photoSpeakers} alt="photoSpeakers"/>
                            <div className='profile'>
                                <h4 className='name'>
                                    <em>정영준 컨테이너 스페셜리스트</em>
                                    <span>SA, AWS</span>
                                </h4>
                                <p className='desc'>
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                </p>
                            </div>
                        </div>

                        <div className='profile-wrapper'>
                            <img className='photo-speaker' src={photoSpeakers} alt="photoSpeakers"/>
                            <div className='profile'>
                                <h4 className='name'>
                                    <em>정영준 컨테이너 스페셜리스트</em>
                                    <span>SA, AWS</span>
                                </h4>
                                <p className='desc'>
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                </p>
                            </div>
                        </div>

                        <div className='profile-wrapper'>
                            <img className='photo-speaker' src={photoSpeakers} alt="photoSpeakers"/>
                            <div className='profile'>
                                <h4 className='name'>
                                    <em>정영준 컨테이너 스페셜리스트</em>
                                    <span>SA, AWS</span>
                                </h4>
                                <p className='desc'>
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                </p>
                            </div>
                        </div>

                        <div className='profile-wrapper'>
                            <img className='photo-speaker' src={photoSpeakers} alt="photoSpeakers"/>
                            <div className='profile'>
                                <h4 className='name'>
                                    <em>정영준 컨테이너 스페셜리스트</em>
                                    <span>SA, AWS</span>
                                </h4>
                                <p className='desc'>
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                    정영준 시니어 컨테이너 SA는 주로 컨테이너 도입과 앱 현대화를 위한 활동을 지원합니다. 스타트업에서의 웹앱 개발 및 군사용 솔루션 개발 뿐만 아니라 오픈소스 엔지니어 및 통신/엔터프라이즈 고객들과의 오랜 경험을 바탕으로 고객과 소통합니다.
                                </p>
                            </div>
                        </div>
                    </section>                            
                </SwiperSlide>
            </Swiper>
    );
  }