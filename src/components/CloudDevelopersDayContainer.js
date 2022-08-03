import * as React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Box from '@mui/material/Box';
import ProgramTimetable from './ProgramTimetable'
import SpeakersSwiper from './SpeakersSwiper';

export default function CloudDevelopersDayContainer() {

    return (
        <Box component="main" className='cloud-developers-day-container'>
            <section className='contents'>
                <PerfectScrollbar className='vertical-scroll-area'>
                    <Box className='article'>
                        <h3><span className='text-red'>LG전자</span>와 함께 하는 AWS | LG Cloud Developer’s Day!</h3>
                        <p>
                            빠르게 변화하고 있는 비즈니스 환경에서 기업은 뉴 노멀에 적응하기 위한 기반 구축을 고민하고 있습니다. LG전자를 위한 AWS | LG Cloud Developer’s Day는 하루 Full Day로 진행하는 온라인 세션, 핸즈온 랩, 워크샵으로 이루어진 아젠다로 LG전자 개발자분들을 대상으로 서비스 소개 및 데모 수행을 통한 기초부터 실습까지 다양한 준비를 하였습니다. AWS 클라우드 상에서 Serverless, DevOps, AI/ML 등의 서비스를 활용해서 비즈니스 어플리케이션, 비즈니스 로직을 빠르게 적용해볼 수 있습니다. 본 세션은 LG를 직접 담당하는 Solutions Architect 분들을 모시고 실행될 예정이며, AWS와 올해와 내년도에 함께 더 많은 비즈니스 파트너십 기회를 모색하고자 합니다.<br/><br/>
                            아래 발표내용을 확인하시고 등록해주세요.
                        </p>
                    </Box>
                    <Box className='article bg-lightgray'>
                        <h3>Cloud Developer’s Day는 다음 분들을 대상으로 합니다.</h3>
                        <ul className='list'>
                            <li>LG전자 CTO 조직 산하 개발자 모든분들</li>
                            <li>LG전자 클라우드플랫폼 연구소 개발자 모든분들</li>
                            <li>IT 실무 담당자, IT 전문가 또는 기술 관리자, 비즈니스 담당자 등</li>
                            <li>개발자/엔지니어, 클라우드 운영자, 솔루션 또는 시스템 아키텍트, 시스템 관리자</li>
                        </ul>
                    </Box>                    
                    <Box className='article'>
                        <h3>Cloud Developer’s Day: Conference 프로그램 일정</h3>
                        <p className='text-helper'>&#8251; 총 18개 세션으로 진행 예정 : 플랫폼사업센터(6), CTO(4), H&amp;A(2), HE(2), 외부(4)</p>
                        <ProgramTimetable/>
                    </Box>
                    <Box className='article bg-lightgray'>
                        <h3>발표자</h3>
                        <SpeakersSwiper/>
                    </Box>
                </PerfectScrollbar>
            </section>
        </Box>     
    );
  }