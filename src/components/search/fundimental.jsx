import React, { useState, useEffect } from 'react';
import { Link, useParams} from 'react-router-dom';
import { createTheme, Typography } from "@mui/material";
import "./stock.css";
import { Box } from "@mui/system";
import { FaRegNewspaper,FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { getFirestore } from "firebase/firestore";
import { doc, onSnapshot } from "firebase/firestore";
import app from "../../Firebase";
import { Grid } from "@mui/material";
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

const theme = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });

function Fundimental() {
  const [language, setLanguage] = useState('');
  const { stock } = useParams();
  const stockList = ['2S','3K-BAT','7UP','A','A5','AAV','ABICO','ABM','ACAP','ACC','ACE','ACG','ADB','ADD','ADVANC','AEONTS','AF','AFC','AGE','AH','AHC','AI','AIE','AIRA','AIT','AJ','AJA','AKP','AKR','ALL','ALLA','ALT','ALUCON','AMA','AMANAH','AMARIN','AMATA','AMATAV','AMC','AMR','ANAN','AOT','AP','APCO','APCS','APEX','APP','APURE','AQ','AQUA','ARIN','ARIP','ARROW','AS','ASAP','ASEFA','ASIA','ASIAN','ASIMAR','ASK','ASN','ASP','ASW','ATP30','AU','AUCT','AWC','AYUD','B','B52','BA','BAFS','BAM','BANPU','BAY','BBIK','BBL','BC','BCH','BCP','BCPG','BCT','BDMS','BE8','BEAUTY','BEC','BEM','BEYOND','BFIT','BGC','BGRIM','BGT','BH','BIG','BIZ','BJC','BJCHI','BKD','BKI','BLA','BLAND','BLISS','BM','BOL','BPP','BR','BROCK','BROOK','BRR','BSBM','BSM','BTNC','BTS','BTW','BUI','BWG','BYD','CAZ','CBG','CCET','CCP','CEN','CENTEL','CFRESH','CGD','CGH','CHARAN','CHAYO','CHEWA','CHG','CHO','CHOTI','CHOW','CI','CIG','CIMBT','CITY','CK','CKP','CM','CMAN','CMC','CMO','CMR','CNT','COLOR','COM7','COMAN','COTTO','CPALL','CPANEL','CPF','CPH','CPI','CPL','CPN','CPR','CPT','CPW','CRANE','CRC','CRD','CSC','CSP','CSR','CSS','CTW','CV','CWT','D','DCC','DCON','DDD','DELTA','DEMCO','DHOUSE','DIMET','DITTO','DMT','DOD','DOHOME','DPAINT','DRT','DTAC','DTCI','DUSIT','DV8','EA','EASON','EASTW','ECF','ECL','EE','EFORL','EGCO','EKH','EMC','EP','EPG','ERW','ESSO','ESTAR','ETC','ETE','EVER','F&D','FANCY','FE','FLOYD','FMT','FN','FNS','FORTH','FPI','FPT','FSMART','FSS','FTE','FVC','GBX','GC','GCAP','GEL','GENCO','GFPT','GGC','GIFT','GJS','GL','GLAND','GLOBAL','GLOCON','GLORY','GPI','GPSC','GRAMMY','GRAND','GREEN','GSC','GSTEEL','GTB','GULF','GUNKUL','GYT','HANA','HARN','HEMP','HENG','HFT','HMPRO','HPT','HTC','HTECH','HUMAN','HYDRO','ICC','ICHI','ICN','IFEC','IFS','IHL','IIG','III','ILINK','ILM','IMH','IND','INET','INGRS','INOX','INSET','INSURE','INTUCH','IP','IRC','IRCP','IRPC','IT','ITD','ITEL','IVL','J','JAK','JAS','JCK','JCKH','JCT','JKN','JMART','JMT','JP','JR','JSP','JTS','JUBILE','JUTHA','JWD','K','KAMART','KASET','KBANK','KBS','KC','KCAR','KCE','KCM','KDH','KEX','KGI','KIAT','KISS','KK','KKC','KKP','KOOL','KSL','KTB','KTC','KTIS','KUMWEL','KUN','KWC','KWG','KWM','KYE','L&E','LALIN','LANNA','LDC','LEE','LEO','LH','LHFG','LHK','LIT','LOXLEY','LPH','LPN','LRH','LST','M','M-CHAI','MACO','MAJOR','MAKRO','MALEE','MANRIN','MATCH','MATI','MAX','MBAX','MBK','MBKET','MC','MCOT','MCS','MDX','MEGA','MENA','META','METCO','MFC','MFEC','MGT','MICRO','MIDA','MILL','MINT','MITSIB','MJD','MK','ML','MODERN','MONO','MOONG','MORE','MPIC','MSC','MTC','MTI','MUD','MVP','NBC','NC','NCAP','NCH','NCL','NDR','NEP','NER','NETBAY','NEW','NEWS','NEX','NFC','NINE','NKI','NMG','NNCL','NOBLE','NOK','NOVA','NPK','NRF','NSI','NSL','NTV','NUSA','NVD','NWR','NYT','OCC','OCEAN','OGC','OHTL','OISHI','ONEE','OR','ORI','OSP','OTO','PACE','PACO','PAE','PAF','PAP','PATO','PB','PCSGH','PDG','PDJ','PE','PERM','PF','PG','PHOL','PICO','PIMO','PIN','PJW','PK','PL','PLANB','PLANET','PLAT','PLE','PM','PMTA','POLAR','PORT','POST','PPM','PPP','PPPM','PPS','PR9','PRAKIT','PRAPAT','PREB','PRECHA','PRG','PRIME','PRIN','PRINC','PRM','PRO','PROEN','PROS','PROUD','PSG','PSH','PSL','PSTC','PT','PTG','PTL','PTT','PTTEP','PTTGC','PYLON','Q-CON','QH','QLT','QTC','RAM','RATCH','RBF','RCL','RICHY','RJH','RML','ROCK','ROH','ROJNA','RP','RPC','RPH','RS','RSP','RT','RWI','S','S&J','S11','SA','SAAM','SABINA','SABUY','SAK','SALEE','SAM','SAMART','SAMCO','SAMTEL','SANKO','SAPPE','SAT','SAUCE','SAWAD','SAWANG','SC','SCB','SCC','SCCC','SCG','SCGP','SCI','SCM','SCN','SCP','SDC','SE','SE-ED','SEAFCO','SEAOIL','SECURE','SELIC','SENA','SF','SFLEX','SFP','SFT','SGF','SGP','SHANG','SHR','SIAM','SICT','SIMAT','SINGER','SIRI','SIS','SISB','SITHAI','SK','SKE','SKN','SKR','SKY','SLM','SLP','SMART','SMD','SMIT','SMK','SMPC','SMT','SNC','SNNP','SNP','SO','SOLAR','SONIC','SORKON','SPA','SPACK','SPALI','SPC','SPCG','SPG','SPI','SPRC','SPVI','SQ','SR','SRICHA','SSC','SSF','SSP','SSSC','SST','STA','STANLY','STAR','STARK','STC','STEC','STECH','STGT','STHAI','STI','STOWER','STPI','SUC','SUN','SUPER','SUSCO','SUTHA','SVH','SVI','SVOA','SVT','SWC','SYMC','SYNEX','SYNTEC','TACC','TAE','TAKUNI','TAPAC','TASCO','TBSP','TC','TCAP','TCC','TCCC','TCJ','TCMC','TCOAT','TEAM','TEAMG','TFG','TFI','TFM','TFMAMA','TGH','TGPRO','TH','THAI','THANA','THANI','THCOM','THE','THG','THIP','THL','THMUI','THRE','THREL','TIDLOR','TIGER','TIPCO','TIPH','TISCO','TITLE','TK','TKN','TKS','TKT','TM','TMC','TMD','TMI','TMILL','TMT','TMW','TNDT','TNH','TNITY','TNL','TNP','TNPC','TNR','TOA','TOG','TOP','TOPP','TPA','TPAC','TPBI','TPCH','TPCS','TPIPL','TPIPP','TPLAS','TPOLY','TPP','TPS','TQM','TQR','TR','TRC','TRITN','TRT','TRU','TRUBB','TSC','TSE','TSF','TSI','TSR','TSTE','TSTH','TTA','TTB','TTCL','TTI','TTT','TTW','TU','TVD','TVI','TVO','TVT','TWP','TWPC','TWZ','TYCN','U','UAC','UBE','UBIS','UEC','UKEM','UMI','UMS','UNIQ','UOBKH','UP','UPA','UPF','UPOIC','UREKA','UT','UTP','UV','UVAN','VARO','VCOM','VGI','VIBHA','VIH','VL','VNG','VNT','VPO','VRANDA','W','WACOAL','WAVE','WGE','WHA','WHAUP','WICE','WIIK','WIN','WINMED','WINNER','WORK','WP','WPH','XO','XPG','YGG','YUASA','ZEN','ZIGA','TRUE'];

  console.log(stock)

  const [Data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://bonsai-finan-api.herokuapp.com/ticker=${stock}.BK&period=3mo&interval=1d`).then((res)=>{
      res.data.result.map((data)=>{
        // console.log(data.Date)
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
    <div className='fadedi'>
      <Typography component="div" theme={theme}>
      <div className='stock-box'>
        <Box className="stock-title">{stock}</Box>
        </div>
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


        <Box className="fundamental-topic">สถิติสำคัญ</Box>
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
        <Box className="fundamental-topic">สรุปการเติบโต</Box>
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

        <Box className="fundamental-topic">อัตราส่วนทางการเงิน</Box>
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
        <Box className="fundamental-topic">สรุปการเงิน</Box>
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
    
  );
};

export default Fundimental;