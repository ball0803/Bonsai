import React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const Posts = ({ posts, loading }) => {
  const navigate = useNavigate()
  const stockList = ['2S','3K-BAT','7UP','A','A5','AAV','ABICO','ABM','ACAP','ACC','ACE','ACG','ADB','ADD','ADVANC','AEONTS','AF','AFC','AGE','AH','AHC','AI','AIE','AIRA','AIT','AJ','AJA','AKP','AKR','ALL','ALLA','ALT','ALUCON','AMA','AMANAH','AMARIN','AMATA','AMATAV','AMC','AMR','ANAN','AOT','AP','APCO','APCS','APEX','APP','APURE','AQ','AQUA','ARIN','ARIP','ARROW','AS','ASAP','ASEFA','ASIA','ASIAN','ASIMAR','ASK','ASN','ASP','ASW','ATP30','AU','AUCT','AWC','AYUD','B','B52','BA','BAFS','BAM','BANPU','BAY','BBIK','BBL','BC','BCH','BCP','BCPG','BCT','BDMS','BE8','BEAUTY','BEC','BEM','BEYOND','BFIT','BGC','BGRIM','BGT','BH','BIG','BIZ','BJC','BJCHI','BKD','BKI','BLA','BLAND','BLISS','BM','BOL','BPP','BR','BROCK','BROOK','BRR','BSBM','BSM','BTNC','BTS','BTW','BUI','BWG','BYD','CAZ','CBG','CCET','CCP','CEN','CENTEL','CFRESH','CGD','CGH','CHARAN','CHAYO','CHEWA','CHG','CHO','CHOTI','CHOW','CI','CIG','CIMBT','CITY','CK','CKP','CM','CMAN','CMC','CMO','CMR','CNT','COLOR','COM7','COMAN','COTTO','CPALL','CPANEL','CPF','CPH','CPI','CPL','CPN','CPR','CPT','CPW','CRANE','CRC','CRD','CSC','CSP','CSR','CSS','CTW','CV','CWT','D','DCC','DCON','DDD','DELTA','DEMCO','DHOUSE','DIMET','DITTO','DMT','DOD','DOHOME','DPAINT','DRT','DTAC','DTCI','DUSIT','DV8','EA','EASON','EASTW','ECF','ECL','EE','EFORL','EGCO','EKH','EMC','EP','EPG','ERW','ESSO','ESTAR','ETC','ETE','EVER','F&D','FANCY','FE','FLOYD','FMT','FN','FNS','FORTH','FPI','FPT','FSMART','FSS','FTE','FVC','GBX','GC','GCAP','GEL','GENCO','GFPT','GGC','GIFT','GJS','GL','GLAND','GLOBAL','GLOCON','GLORY','GPI','GPSC','GRAMMY','GRAND','GREEN','GSC','GSTEEL','GTB','GULF','GUNKUL','GYT','HANA','HARN','HEMP','HENG','HFT','HMPRO','HPT','HTC','HTECH','HUMAN','HYDRO','ICC','ICHI','ICN','IFEC','IFS','IHL','IIG','III','ILINK','ILM','IMH','IND','INET','INGRS','INOX','INSET','INSURE','INTUCH','IP','IRC','IRCP','IRPC','IT','ITD','ITEL','IVL','J','JAK','JAS','JCK','JCKH','JCT','JKN','JMART','JMT','JP','JR','JSP','JTS','JUBILE','JUTHA','JWD','K','KAMART','KASET','KBANK','KBS','KC','KCAR','KCE','KCM','KDH','KEX','KGI','KIAT','KISS','KK','KKC','KKP','KOOL','KSL','KTB','KTC','KTIS','KUMWEL','KUN','KWC','KWG','KWM','KYE','L&E','LALIN','LANNA','LDC','LEE','LEO','LH','LHFG','LHK','LIT','LOXLEY','LPH','LPN','LRH','LST','M','M-CHAI','MACO','MAJOR','MAKRO','MALEE','MANRIN','MATCH','MATI','MAX','MBAX','MBK','MBKET','MC','MCOT','MCS','MDX','MEGA','MENA','META','METCO','MFC','MFEC','MGT','MICRO','MIDA','MILL','MINT','MITSIB','MJD','MK','ML','MODERN','MONO','MOONG','MORE','MPIC','MSC','MTC','MTI','MUD','MVP','NBC','NC','NCAP','NCH','NCL','NDR','NEP','NER','NETBAY','NEW','NEWS','NEX','NFC','NINE','NKI','NMG','NNCL','NOBLE','NOK','NOVA','NPK','NRF','NSI','NSL','NTV','NUSA','NVD','NWR','NYT','OCC','OCEAN','OGC','OHTL','OISHI','ONEE','OR','ORI','OSP','OTO','PACE','PACO','PAE','PAF','PAP','PATO','PB','PCSGH','PDG','PDJ','PE','PERM','PF','PG','PHOL','PICO','PIMO','PIN','PJW','PK','PL','PLANB','PLANET','PLAT','PLE','PM','PMTA','POLAR','PORT','POST','PPM','PPP','PPPM','PPS','PR9','PRAKIT','PRAPAT','PREB','PRECHA','PRG','PRIME','PRIN','PRINC','PRM','PRO','PROEN','PROS','PROUD','PSG','PSH','PSL','PSTC','PT','PTG','PTL','PTT','PTTEP','PTTGC','PYLON','Q-CON','QH','QLT','QTC','RAM','RATCH','RBF','RCL','RICHY','RJH','RML','ROCK','ROH','ROJNA','RP','RPC','RPH','RS','RSP','RT','RWI','S','S&J','S11','SA','SAAM','SABINA','SABUY','SAK','SALEE','SAM','SAMART','SAMCO','SAMTEL','SANKO','SAPPE','SAT','SAUCE','SAWAD','SAWANG','SC','SCB','SCC','SCCC','SCG','SCGP','SCI','SCM','SCN','SCP','SDC','SE','SE-ED','SEAFCO','SEAOIL','SECURE','SELIC','SENA','SF','SFLEX','SFP','SFT','SGF','SGP','SHANG','SHR','SIAM','SICT','SIMAT','SINGER','SIRI','SIS','SISB','SITHAI','SK','SKE','SKN','SKR','SKY','SLM','SLP','SMART','SMD','SMIT','SMK','SMPC','SMT','SNC','SNNP','SNP','SO','SOLAR','SONIC','SORKON','SPA','SPACK','SPALI','SPC','SPCG','SPG','SPI','SPRC','SPVI','SQ','SR','SRICHA','SSC','SSF','SSP','SSSC','SST','STA','STANLY','STAR','STARK','STC','STEC','STECH','STGT','STHAI','STI','STOWER','STPI','SUC','SUN','SUPER','SUSCO','SUTHA','SVH','SVI','SVOA','SVT','SWC','SYMC','SYNEX','SYNTEC','TACC','TAE','TAKUNI','TAPAC','TASCO','TBSP','TC','TCAP','TCC','TCCC','TCJ','TCMC','TCOAT','TEAM','TEAMG','TFG','TFI','TFM','TFMAMA','TGH','TGPRO','TH','THAI','THANA','THANI','THCOM','THE','THG','THIP','THL','THMUI','THRE','THREL','TIDLOR','TIGER','TIPCO','TIPH','TISCO','TITLE','TK','TKN','TKS','TKT','TM','TMC','TMD','TMI','TMILL','TMT','TMW','TNDT','TNH','TNITY','TNL','TNP','TNPC','TNR','TOA','TOG','TOP','TOPP','TPA','TPAC','TPBI','TPCH','TPCS','TPIPL','TPIPP','TPLAS','TPOLY','TPP','TPS','TQM','TQR','TR','TRC','TRITN','TRT','TRU','TRUBB', 'TRUE', 'TSC','TSE','TSF','TSI','TSR','TSTE','TSTH','TTA','TTB','TTCL','TTI','TTT','TTW','TU','TVD','TVI','TVO','TVT','TWP','TWPC','TWZ','TYCN','U','UAC','UBE','UBIS','UEC','UKEM','UMI','UMS','UNIQ','UOBKH','UP','UPA','UPF','UPOIC','UREKA','UT','UTP','UV','UVAN','VARO','VCOM','VGI','VIBHA','VIH','VL','VNG','VNT','VPO','VRANDA','W','WACOAL','WAVE','WGE','WHA','WHAUP','WICE','WIIK','WIN','WINMED','WINNER','WORK','WP','WPH','XO','XPG','YGG','YUASA','ZEN','ZIGA'];

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
    <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
      {posts &&
        posts.map((item) => (
          <Grid item xs={4} >
            <Card className="post" sx={{ maxWidth: 345}} style={{height: '450px', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <CardActionArea href={item.link} target="_blank">
                <CardMedia
                  component="img"
                  height="140"
                  image={item.pic ? item.pic==='https://sp-ao.shortpixel.ai/client/q_lossless,ret_img/https://www.mitihoon.com/wp-content/uploads/2017/12/Blue-150x100.jpg' ? 'https://www.mitihoon.com/wp-content/uploads/2018/01/mitihoon.jpg': item.pic :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsaCI-qKlHLUj70F15CT6NDY6ku49oiDRK__BYPuBGDz0lz-7CxCRx78qVDO-0Kku2d6c&usqp=CAU"}
                  className='postImage'
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={{fontFamily: 'Kanit'}}>
                    {item.header.length > 100 ? `${item.header.slice(0, 100)}...`: item.header}
                  </Typography>
                  {/* <hr style={{border: "2px solid #268265"}}/> */}
                  {item.summary ?
                  <Typography variant="body2" color="text.secondary" style={{fontFamily: 'Kanit'}}>
                    {item.summary.slice(0,100)}...
                  </Typography>:
                  null
                  }
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Typography variant='overline'
                  color="#268265"
                  style={{marginLeft: 10}}
                >
                  <time dateTime={item.date}>{item.date.toDate().toDateString()}</time>
                  </Typography>
                <ul> 
                  {item.tag.map((tag)=>(stockList.includes(tag.toUpperCase()) ? 
                  <Button onClick={()=>{navigate(`/search/${tag.toUpperCase()}`)}} 
                  variant='contained' 
                  size="small" 
                  style={{borderRadius: "30px",margin: "0 5px", backgroundColor: "#268265"}}
                  >
                    {tag.toUpperCase()}
                  </Button> 
                  : null))}
                </ul>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
    </div>
  );

};

export default Posts;