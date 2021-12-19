import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams} from 'react-router-dom';
import { createTheme, Typography } from "@mui/material";
import "./stock.css";
import { Box } from "@mui/system";
import { FaRegNewspaper,FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Grid } from "@mui/material";
import ReactApexChart from 'react-apexcharts';
import SideMenu from '../SideMenu';
import axios from 'axios';
import { IconButton } from '@mui/material';
import { Button } from '@mui/material';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';

const theme = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });

function Fundimental() {
  const { stock } = useParams();
  const IS = useRef(null)
  const SG = useRef(null)
  const FR = useRef(null)
  const FS = useRef(null)

  console.log(stock)

  const [Data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://bonsai-finan-api.herokuapp.com/ticker=${stock}.BK&period=3mo&interval=1d`).then((res)=>{
      res.data.result.map((data)=>{
        setData(Data => [...Data, [data.Date, data.Open.toFixed(2), data.High.toFixed(2), data.Low.toFixed(2), data.Close.toFixed(2)]])
      })
    })
    
  }, [])

  const [userData, setUserdata] = useState(false);
  useEffect(() => {
    fetch(
      `https://firestore.googleapis.com/v1/projects/bonsai-c2608/databases/(default)/documents/Fundimental/${stock}?key=AIzaSyAQfPN3u3W01Whz6qi8fYXuTadDFKbKR2w`
    )
      .then((response) => response.json())
      .then((userData) => setUserdata(userData));
      const IS = document.getElementById('IS')
  }, []);

  if (!userData) {
    return <div />;
  }

  const getField = (field1, field2) => {
    const data = userData.fields[field1].mapValue.fields[field2].arrayValue.values;
    return data.slice(
      -5
    )
  };
  return (
    <>
      <div className="test">
        <Button onClick={()=>{window.scrollTo({top: 0, behavior: "smooth"})}} style={{borderRadius: "50px", width: "50px", height: "50px", color: 'green'}}>
        <ArrowCircleUpOutlinedIcon fontSize='large'/>
        </Button>
      </div>
      <SideMenu focus="Search" IS={IS} SG={SG} FR={FR} FS={FS} fundi={true}/>
      <div className="container">
        <div className='fadedi'>
          <Typography component="div" theme={theme}>
          {/* <div className='stock-box'>
            <Box className="stock-title">{stock}</Box>
            </div> */}
            <Typography variant='h2'>{stock}</Typography>
            <button className="link-new"><Link className="linkto-new" to={`/news/${stock}`}>
              <div className="overlink-new">&nbsp;&nbsp;&nbsp;&nbsp;
              <FaRegNewspaper className="link-logo" />
              <Box className="link-new-text">
                &nbsp;&nbsp;&nbsp;News&nbsp;&nbsp;
              </Box>
              <IoIosArrowForward
                className="link-logo"
                style={{ color: "#2EAA49" }}
              /></div></Link>
            </button>
    <div className='fundi-graph'>
    <ReactApexChart options={{
              chart: {
                type: 'candlestick',
                height: 400,
                
              },
              
              xaxis: {
                type: 'datetime'
              },
              yaxis: {
                tooltip: {
                  enabled: true
                }
              }
            }} series={[{
              data:  Data
            }]} type="candlestick" height={400} width={1000}/>

    </div>


            <Box ref={IS} id="IS" className="fundamental-topic">สถิติสำคัญ</Box>
            <div className="over">
              <Grid container>
                <Grid className="timeline" item xs={3.5}>
                  <p>{stock}</p>
                </Grid>

                {getField("IS", "timeLine")
                  .map((info, idx) => (
                    <Grid className="timeline" item xs={1.7}>
                      {info.stringValue}
                    </Grid>
                  ))}
              </Grid>
              <Grid container>
                <Grid className="topic-light-table" item xs={3.5}>
                  <p>ราคาล่าสุด</p>
                </Grid>
                {getField("IS", "lastPrice")
                  .map(
                  (info, idx) => (
                    <Grid className="light-table" item xs={1.7}>
                      {info.stringValue}
                    </Grid>
                  )
                )}
              </Grid>
              <Grid container>
                <Grid className="topic-dark-table" item xs={3.5}>
                  <p>มูลค่าหลักทรัพย์ตามราคาตลาด</p>
                </Grid>
                {getField("IS", "MarketCap")
                  .map(
                  (info, idx) => (
                    <Grid className="dark-table" item xs={1.7}>
                      {info.stringValue}
                    </Grid>
                  )
                )}
              </Grid>

              <Grid container>
                <Grid className="topic-light-table" item xs={3.5}>
                  <p>P/E</p>
                </Grid>
                {getField("IS", "P/E")
                  .map(
                  (info, idx) => (
                    <Grid className="light-table" item xs={1.7}>
                      {info.stringValue}
                    </Grid>
                  )
                )}
              </Grid>
              <Grid container>
                <Grid className="topic-dark-table" item xs={3.5}>
                  <p>P/BV</p>
                </Grid>
                {getField("IS", "P/BV")
                  .map(
                  (info, idx) => (
                    <Grid className="dark-table" item xs={1.7}>
                      {info.stringValue}
                    </Grid>
                  )
                )}
              </Grid>

              <Grid container>
                <Grid className="topic-light-table" item xs={3.5}>
                  <p>มูลค่าหุ้นทางบัญชีต่อหุ้น</p>
                </Grid>
                {getField("IS", "valuePerShare")
                  .map((info, idx) => (
                  <Grid className="light-table" item xs={1.7}>
                    {info.stringValue}
                  </Grid>
                ))}
              </Grid>
              <Grid container>
                <Grid className="topic-dark-table" item xs={3.5}>
                  <p>อัตราส่วนเงินปันผล</p>
                </Grid>
                {getField("IS", "yieldRatio")
                  .map((info, idx) => (
                  <Grid className="dark-table" item xs={1.7}>
                    {info.stringValue}
                  </Grid>
                ))}
              </Grid>
              <Grid container>
                <Grid className="topic-light-table" item xs={3.5}>
                  <p>EV/EBITDA</p>
                </Grid>
                {getField("IS", "EV/EBITDA")
                  .map((info, idx) => (
                  <Grid className="light-table" item xs={1.7}>
                    {info.stringValue}
                  </Grid>
                ))}
              </Grid>
            </div>
            <Box ref={SG} id="SG" className="fundamental-topic">สรุปการเติบโต</Box>
            <Grid container>
              <Grid className="timeline" item xs={3.5}>
                <p>{stock}</p>
              </Grid>
              {getField("S10YG", "timeLine")
                  .map(
                (info, idx) => (
                  <Grid className="timeline" item xs={1.7}>
                    {info.stringValue}
                  </Grid>
                )
              )}
            </Grid>
            <Grid container>
              <Grid className="topic-light-table" item xs={3.5}>
                <p>รายได้รวม</p>
              </Grid>
              {getField("S10YG", "totalIncome")
                  .map(
                (info, idx) => (
                  <Grid className="light-table" item xs={1.7}>
                    {info.stringValue}
                  </Grid>
                )
              )}
            </Grid>
            <Grid container>
              <Grid className="topic-dark-table" item xs={3.5}>
                <p>การเติบโตต่อปี (%)</p>
              </Grid>
              {getField("S10YG", "TIGrowthPerYear")
                  .map(
                (info, idx) => (
                  <Grid className="dark-table" item xs={1.7}>
                    {info.stringValue}
                  </Grid>
                )
              )}
            </Grid>

            <Grid container>
              <Grid className="topic-light-table" item xs={3.5}>
                <p>กำไรสุทธิ</p>
              </Grid>
              {getField("S10YG", "netProfit")
                  .map(
                (info, idx) => (
                  <Grid className="light-table" item xs={1.7}>
                    {info.stringValue}
                  </Grid>
                )
              )}
            </Grid>
            <Grid container>
              <Grid className="topic-dark-table" item xs={3.5}>
                <p>การเติบโตต่อปีของกำไรสุทธิ (%)</p>
              </Grid>
              
              {getField("S10YG", "NPGrowthPerYear").map((info, idx) => (
                <Grid className="dark-table" item xs={1.7}>
                  {info.stringValue}
                </Grid>
              ))}
            </Grid>

            <Grid container>
              <Grid className="topic-light-table" item xs={3.5}>
                <p>กำไรต่อหุ้น (EPS)</p>
              </Grid>
              {getField("S10YG", "ProfitPerStock").map((info, idx) => (
                <Grid className="light-table" item xs={1.7}>
                  {info.stringValue}
                </Grid>
              ))}
            </Grid>
            <Grid container>
              <Grid className="topic-dark-table" item xs={3.5}>
                <p>การเติบโตต่อปีของกำไรต่อหุ้น (%)</p>
              </Grid>
              {getField("S10YG", "PPSGrowthPerYear").map((info, idx) => (
                <Grid className="dark-table" item xs={1.7}>
                  {info.stringValue}
                </Grid>
              ))}
            </Grid>

            <Box ref={FR} id="FR" className="fundamental-topic">อัตราส่วนทางการเงิน</Box>
            <Grid container>
              <Grid className="timeline" item xs={3.5}>
                <p>{stock}</p>
              </Grid>
              {getField("ROF", "timeLine").map(
                (info, idx) => (
                  <Grid className="timeline" item xs={1.7}>
                    {info.stringValue}
                  </Grid>
                )
              )}
            </Grid>
            <Grid container>
              <Grid className="topic-light-table" item xs={3.5}>
                <p>ROA</p>
              </Grid>
              {getField("ROF", "ROA").map(
                (info, idx) => (
                  <Grid className="light-table" item xs={1.7}>
                    {info.stringValue}
                  </Grid>
                )
              )}
            </Grid>
            <Grid container>
              <Grid className="topic-dark-table" item xs={3.5}>
                <p>ROE</p>
              </Grid>
              {getField("ROF", "ROE").map(
                (info, idx) => (
                  <Grid className="dark-table" item xs={1.7}>
                    {info.stringValue}
                  </Grid>
                )
              )}
            </Grid>
            <Grid container>
              <Grid className="topic-light-table" item xs={3.5}>
                <p>อัตรากำไรขั้นต้น (%)</p>
              </Grid>
              {getField("ROF", "grossMargin").map(
                (info, idx) => (
                  <Grid className="light-table" item xs={1.7}>
                    {info.stringValue}
                  </Grid>
                )
              )}
            </Grid>

            <Grid container>
              <Grid className="topic-dark-table" item xs={3.5}>
                <p>อัตราส่วนการขายและบริหารต่อรายได้ (%)</p>
              </Grid>
              {getField("ROF", "saleNAdminRevenueRatio").map(
                (info, idx) => (
                  <Grid className="dark-table" item xs={1.7}>
                    {info.stringValue}
                  </Grid>
                )
              )}
            </Grid>
            <Grid container>
              <Grid className="topic-light-table" item xs={3.5}>
                <p>อัตรากำไรสุทธิ (%)</p>
              </Grid>
              {getField("ROF", "netProfitMargin").map((info, idx) => (
                <Grid className="light-table" item xs={1.7}>
                  {info.stringValue}
                </Grid>
              ))}
            </Grid>

            <Grid container>
              <Grid className="topic-dark-table" item xs={3.5}>
                <p>หนี้สิน/ทุน (เท่า)</p>
              </Grid>
              {getField("ROF", "debt/fund").map((info, idx) => (
                <Grid className="dark-table" item xs={1.7}>
                  {info.stringValue}
                </Grid>
              ))}
            </Grid>
            <Grid container>
              <Grid className="topic-light-table" item xs={3.5}>
                <p>วงจรเงินสด (วัน)</p>
              </Grid>
              {getField("ROF", "cashCycle").map((info, idx) => (
                <Grid className="light-table" item xs={1.7}>
                  {info.stringValue}
                </Grid>
              ))}
            </Grid>
            <Box ref={FS} id="FS"className="fundamental-topic">สรุปการเงิน</Box>
            <Grid container>
              <Grid className="timeline" item xs={3.5}>
                <p>{stock}</p>
              </Grid>
              {getField("S10YF", "timeLine").map(
                (info, idx) => (
                  <Grid className="timeline" item xs={1.7}>
                    {info.stringValue}
                  </Grid>
                )
              )}
            </Grid>
            <Grid container>
              <Grid className="topic-light-table" item xs={3.5}>
                <p>สินทรัพย์รวม</p>
              </Grid>
              {getField("S10YF", "totalAsset").map((info, idx) => (
                <Grid className="light-table" item xs={1.7}>
                  {info.stringValue}
                </Grid>
              ))}
            </Grid>
            <Grid container>
              <Grid className="topic-dark-table" item xs={3.5}>
                <p>หนี้สินรวม</p>
              </Grid>
              {getField("S10YF", "totalDebt").map((info, idx) => (
                <Grid className="dark-table" item xs={1.7}>
                  {info.stringValue}
                </Grid>
              ))}
            </Grid>
            <Grid container>
              <Grid className="topic-light-table" item xs={3.5}>
                <p>ส่วนของผู้ถือหุ้น</p>
              </Grid>
              {getField("S10YF", "shareHolder").map((info, idx) => (
                <Grid className="light-table" item xs={1.7}>
                  {info.stringValue}
                </Grid>
              ))}
            </Grid>
          <Grid container>
            <Grid className="topic-dark-table" item xs={3.5}>
              <p>มูลค่าหุ้นที่เรียกชำระแล้ว</p>
            </Grid>
            {getField("S10YF", "PUShareValue").map((info, idx) => (
              <Grid className="dark-table" item xs={1.7}>
                {info.stringValue}
              </Grid>
            ))}
          </Grid>
          <Grid container>
            <Grid className="topic-light-table" item xs={3.5}>
              <p>รายได้รวม</p>
            </Grid>
            {getField("S10YF", "totalIncome").map((info, idx) => (
              <Grid className="light-table" item xs={1.7}>
                {info.stringValue}
              </Grid>
            ))}
          </Grid>
          <Grid container>
            <Grid className="topic-dark-table" item xs={3.5}>
              <p>กำไรขั้นต้น</p>
            </Grid>
            {getField("S10YF", "grossProfit").map((info, idx) => (
              <Grid className="dark-table" item xs={1.7}>
                {info.stringValue}
              </Grid>
            ))}
          </Grid>
          <Grid container>
            <Grid className="topic-light-table" item xs={3.5}>
              <p>ค่าใช้จ่ายในการขายและบริหาร</p>
            </Grid>
            {getField("S10YF", "sellingServiceExpenses").map((info, idx) => (
              <Grid className="light-table" item xs={1.7}>
                {info.stringValue}
              </Grid>
            ))}
          </Grid>
          <Grid container>
            <Grid className="topic-dark-table" item xs={3.5}>
              <p>กำไรสุทธิ</p>
            </Grid>
            {getField("S10YF", "depreciaNAmortiza").map((info, idx) => (
              <Grid className="dark-table" item xs={1.7}>
                {info.stringValue}
              </Grid>
            ))}
          </Grid>
          <Grid container>
            <Grid className="topic-light-table" item xs={3.5}>
              <p>ค่าเสื่อมราคาและค่าตัดจำหน่าย</p>
            </Grid>
            {getField("S10YF", "opCashFlow").map((info, idx) => (
              <Grid className="light-table" item xs={1.7}>
                {info.stringValue}
              </Grid>
            ))}
          </Grid>
          <Grid container>
            <Grid className="topic-dark-table" item xs={3.5}>
              <p>กระแสเงินสดจากการดำเนินงาน</p>
            </Grid>
            {getField("S10YF", "investCashFlow").map((info, idx) => (
              <Grid className="dark-table" item xs={1.7}>
                {info.stringValue}
              </Grid>
            ))}
          </Grid>
          <Grid container>
            <Grid className="topic-light-table" item xs={3.5}>
              <p>กระแสเงินสดจากการลงทุน</p>
            </Grid>
            {getField("S10YF", "finanActCashFlow").map((info, idx) => (
              <Grid className="light-table" item xs={1.7}>
                {info.stringValue}
              </Grid>
            ))}
          </Grid>
          <Grid container>
            <Grid className="topic-dark-table" item xs={3.5}>
              <p>กระแสเงินสดจากกิจกรรมทางการเงิน</p>
            </Grid>
            {getField("S10YF", "EPS").map(
              (info, idx) => (
                <Grid className="dark-table" item xs={1.7}>
                  {info.stringValue}
                </Grid>
              )
            )}
          </Grid>
          <Grid container>
            <Grid className="topic-light-table" item xs={3.5}>
              <p>กำไรต่อหุ้น (EPS)</p>
            </Grid>
            {getField("S10YG", "ProfitPerStock").map((info, idx) => (
              <Grid className="light-table" item xs={1.7}>
                {info.stringValue}
              </Grid>
            ))}
          </Grid>
                
          
            
              

            </Typography>
        </div>
      </div>

    </>
  );
};

export default Fundimental;