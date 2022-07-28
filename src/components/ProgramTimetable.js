import * as React from 'react';

export default function ProgramTimetable() {

    return (
        <table className='program-timetable' cellPadding={0}>
            <caption>ProgramTimetable</caption>
            <colgroup>
                <col width="150"/>
                <col width="70"/>
                <col width="*"/>
                <col width="*"/>
                <col width="*"/>
            </colgroup>
            <thead>
                <tr>
                    <th scope="col" colSpan={2}>시간</th>
                    <th scope="col" colSpan={3}>프로그램</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>08:30 ~ 09:00</td>
                    <td>30</td>
                    <td colSpan={3}>
                        <em>Registration and Networking</em>
                    </td>
                </tr>
                <tr>
                    <td>09:00 ~ 09:20</td>
                    <td>20</td>
                    <td colSpan={3}>
                        <em>Opening</em>
                        <span>김동욱 전무님, 김건우 상무님</span>
                    </td>
                </tr>
                <tr>
                    <td>09:20 ~ 10:00</td>
                    <td>40</td>
                    <td colSpan={3}>
                        <em>Keynote "TBD"</em>
                        <span>TBD</span>
                    </td>
                </tr>
                <tr className='track-title'>
                    <td></td>
                    <td></td>
                    <td className='track bg-blue'>Track #1 컨퍼런스룸 (60명)</td>
                    <td className='track bg-gray'>Track #2 이벤트홀 (300명)</td>
                    <td className='track bg-orange'>Track #3 살롱 드 서초 (30명)</td>
                </tr>
                <tr>
                    <td>10:20 ~ 11:00</td>
                    <td>40</td>
                    <td className='track bg-blue'>TBD<span>플랫폼사업센터</span></td>
                    <td className='track bg-gray'>TBD<span>CTO</span></td>
                    <td className='track bg-orange'>TBD<span>AWS</span></td>
                </tr>
                <tr>
                    <td>11:20 ~ 12:00</td>
                    <td>40</td>
                    <td className='track bg-blue'>TBD<span>CTO</span></td>
                    <td className='track bg-gray'>TBD<span>플랫폼사업센터</span></td>
                    <td className='track bg-orange'>TBD<span>H&amp;A</span></td>
                </tr>
                <tr>
                    <td>12:00 ~ 13:20</td>
                    <td>90</td>
                    <td colSpan={3}>
                        <em>점심식사</em> (feat.점심이벤트)
                    </td>
                </tr>
                <tr>
                    <td>13:20 ~ 14:00</td>
                    <td>40</td>
                    <td className='track bg-blue'>TBD<span>플랫폼사업센터</span></td>
                    <td className='track bg-gray'>TBD<span>H&amp;A</span></td>
                    <td className='track bg-orange'>TBD<span>플랫폼사업센터</span></td>
                </tr>
                <tr>
                    <td>14:20 ~ 15:00</td>
                    <td>40</td>
                    <td className='track bg-blue'>TBD<span>AWS</span></td>
                    <td className='track bg-gray'>TBD<span>플랫폼사업센터</span></td>
                    <td className='track bg-orange'>TBD<span>HE</span></td>
                </tr>
                <tr>
                    <td>15:20 ~ 16:00</td>
                    <td>40</td>
                    <td className='track bg-blue'>TBD<span>AWS</span></td>
                    <td className='track bg-gray'>TBD<span>AWS</span></td>
                    <td className='track bg-orange'>TBD<span>CTO</span></td>
                </tr>
                <tr>
                    <td>16:20 ~ 17:00</td>
                    <td>40</td>
                    <td className='track bg-blue'>TBD<span>CTO</span></td>
                    <td className='track bg-gray'>TBD<span>플랫폼사업센터</span></td>
                    <td className='track bg-orange'>TBD<span>HE</span></td>
                </tr>
                <tr>
                    <td>17:00 ~ 17:10</td>
                    <td>10</td>
                    <td colSpan={3}>
                        <em>Closing 및 경품추첨</em>
                        <span>진행자</span>
                    </td>
                </tr>
            </tbody>
        </table>
    );
  }
  