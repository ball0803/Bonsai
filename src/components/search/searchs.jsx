import React, { useState, useEffect,useMemo } from 'react';
import History from './history';
import { Link,useLocation, useHistory, useNavigate } from 'react-router-dom';
import { createTheme, Typography } from "@mui/material";
import "./stock.css";
import { Box } from "@mui/system";
import { FaRegNewspaper,FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { getFirestore } from "firebase/firestore";
import { doc, onSnapshot } from "firebase/firestore";
import app from "../../Firebase";
import { Grid } from "@mui/material";


const theme = createTheme({
    typography: {
      fontFamily: ["Kanit", "sans-serif"].join(","),
    },
  });

  function useQuery() {
    const { search } = useLocation();
  
    return useMemo(() => new URLSearchParams(search), [search]);
  }


function Search() {
  const navigate = useNavigate();
    // useState hooks for input and language
  const [language, setLanguage] = useState('');
  const [input, setInput] = useState('');

  const stockList = ['2S','3K-BAT','7UP','A','A5','AAV','ABICO','ABM','ACAP','ACC','ACE','ACG','ADB','ADD','ADVANC','AEONTS','AF','AFC','AGE','AH','AHC','AI','AIE','AIRA','AIT','AJ','AJA','AKP','AKR','ALL','ALLA','ALT','ALUCON','AMA','AMANAH','AMARIN','AMATA','AMATAV','AMC','AMR','ANAN','AOT','AP','APCO','APCS','APEX','APP','APURE','AQ','AQUA','ARIN','ARIP','ARROW','AS','ASAP','ASEFA','ASIA','ASIAN','ASIMAR','ASK','ASN','ASP','ASW','ATP30','AU','AUCT','AWC','AYUD','B','B52','BA','BAFS','BAM','BANPU','BAY','BBIK','BBL','BC','BCH','BCP','BCPG','BCT','BDMS','BE8','BEAUTY','BEC','BEM','BEYOND','BFIT','BGC','BGRIM','BGT','BH','BIG','BIZ','BJC','BJCHI','BKD','BKI','BLA','BLAND','BLISS','BM','BOL','BPP','BR','BROCK','BROOK','BRR','BSBM','BSM','BTNC','BTS','BTW','BUI','BWG','BYD','CAZ','CBG','CCET','CCP','CEN','CENTEL','CFRESH','CGD','CGH','CHARAN','CHAYO','CHEWA','CHG','CHO','CHOTI','CHOW','CI','CIG','CIMBT','CITY','CK','CKP','CM','CMAN','CMC','CMO','CMR','CNT','COLOR','COM7','COMAN','COTTO','CPALL','CPANEL','CPF','CPH','CPI','CPL','CPN','CPR','CPT','CPW','CRANE','CRC','CRD','CSC','CSP','CSR','CSS','CTW','CV','CWT','D','DCC','DCON','DDD','DELTA','DEMCO','DHOUSE','DIMET','DITTO','DMT','DOD','DOHOME','DPAINT','DRT','DTAC','DTCI','DUSIT','DV8','EA','EASON','EASTW','ECF','ECL','EE','EFORL','EGCO','EKH','EMC','EP','EPG','ERW','ESSO','ESTAR','ETC','ETE','EVER','F&D','FANCY','FE','FLOYD','FMT','FN','FNS','FORTH','FPI','FPT','FSMART','FSS','FTE','FVC','GBX','GC','GCAP','GEL','GENCO','GFPT','GGC','GIFT','GJS','GL','GLAND','GLOBAL','GLOCON','GLORY','GPI','GPSC','GRAMMY','GRAND','GREEN','GSC','GSTEEL','GTB','GULF','GUNKUL','GYT','HANA','HARN','HEMP','HENG','HFT','HMPRO','HPT','HTC','HTECH','HUMAN','HYDRO','ICC','ICHI','ICN','IFEC','IFS','IHL','IIG','III','ILINK','ILM','IMH','IND','INET','INGRS','INOX','INSET','INSURE','INTUCH','IP','IRC','IRCP','IRPC','IT','ITD','ITEL','IVL','J','JAK','JAS','JCK','JCKH','JCT','JKN','JMART','JMT','JP','JR','JSP','JTS','JUBILE','JUTHA','JWD','K','KAMART','KASET','KBANK','KBS','KC','KCAR','KCE','KCM','KDH','KEX','KGI','KIAT','KISS','KK','KKC','KKP','KOOL','KSL','KTB','KTC','KTIS','KUMWEL','KUN','KWC','KWG','KWM','KYE','L&E','LALIN','LANNA','LDC','LEE','LEO','LH','LHFG','LHK','LIT','LOXLEY','LPH','LPN','LRH','LST','M','M-CHAI','MACO','MAJOR','MAKRO','MALEE','MANRIN','MATCH','MATI','MAX','MBAX','MBK','MBKET','MC','MCOT','MCS','MDX','MEGA','MENA','META','METCO','MFC','MFEC','MGT','MICRO','MIDA','MILL','MINT','MITSIB','MJD','MK','ML','MODERN','MONO','MOONG','MORE','MPIC','MSC','MTC','MTI','MUD','MVP','NBC','NC','NCAP','NCH','NCL','NDR','NEP','NER','NETBAY','NEW','NEWS','NEX','NFC','NINE','NKI','NMG','NNCL','NOBLE','NOK','NOVA','NPK','NRF','NSI','NSL','NTV','NUSA','NVD','NWR','NYT','OCC','OCEAN','OGC','OHTL','OISHI','ONEE','OR','ORI','OSP','OTO','PACE','PACO','PAE','PAF','PAP','PATO','PB','PCSGH','PDG','PDJ','PE','PERM','PF','PG','PHOL','PICO','PIMO','PIN','PJW','PK','PL','PLANB','PLANET','PLAT','PLE','PM','PMTA','POLAR','PORT','POST','PPM','PPP','PPPM','PPS','PR9','PRAKIT','PRAPAT','PREB','PRECHA','PRG','PRIME','PRIN','PRINC','PRM','PRO','PROEN','PROS','PROUD','PSG','PSH','PSL','PSTC','PT','PTG','PTL','PTT','PTTEP','PTTGC','PYLON','Q-CON','QH','QLT','QTC','RAM','RATCH','RBF','RCL','RICHY','RJH','RML','ROCK','ROH','ROJNA','RP','RPC','RPH','RS','RSP','RT','RWI','S','S&J','S11','SA','SAAM','SABINA','SABUY','SAK','SALEE','SAM','SAMART','SAMCO','SAMTEL','SANKO','SAPPE','SAT','SAUCE','SAWAD','SAWANG','SC','SCB','SCC','SCCC','SCG','SCGP','SCI','SCM','SCN','SCP','SDC','SE','SE-ED','SEAFCO','SEAOIL','SECURE','SELIC','SENA','SF','SFLEX','SFP','SFT','SGF','SGP','SHANG','SHR','SIAM','SICT','SIMAT','SINGER','SIRI','SIS','SISB','SITHAI','SK','SKE','SKN','SKR','SKY','SLM','SLP','SMART','SMD','SMIT','SMK','SMPC','SMT','SNC','SNNP','SNP','SO','SOLAR','SONIC','SORKON','SPA','SPACK','SPALI','SPC','SPCG','SPG','SPI','SPRC','SPVI','SQ','SR','SRICHA','SSC','SSF','SSP','SSSC','SST','STA','STANLY','STAR','STARK','STC','STEC','STECH','STGT','STHAI','STI','STOWER','STPI','SUC','SUN','SUPER','SUSCO','SUTHA','SVH','SVI','SVOA','SVT','SWC','SYMC','SYNEX','SYNTEC','TACC','TAE','TAKUNI','TAPAC','TASCO','TBSP','TC','TCAP','TCC','TCCC','TCJ','TCMC','TCOAT','TEAM','TEAMG','TFG','TFI','TFM','TFMAMA','TGH','TGPRO','TH','THAI','THANA','THANI','THCOM','THE','THG','THIP','THL','THMUI','THRE','THREL','TIDLOR','TIGER','TIPCO','TIPH','TISCO','TITLE','TK','TKN','TKS','TKT','TM','TMC','TMD','TMI','TMILL','TMT','TMW','TNDT','TNH','TNITY','TNL','TNP','TNPC','TNR','TOA','TOG','TOP','TOPP','TPA','TPAC','TPBI','TPCH','TPCS','TPIPL','TPIPP','TPLAS','TPOLY','TPP','TPS','TQM','TQR','TR','TRC','TRITN','TRT','TRU','TRUBB','TSC','TSE','TSF','TSI','TSR','TSTE','TSTH','TTA','TTB','TTCL','TTI','TTT','TTW','TU','TVD','TVI','TVO','TVT','TWP','TWPC','TWZ','TYCN','U','UAC','UBE','UBIS','UEC','UKEM','UMI','UMS','UNIQ','UOBKH','UP','UPA','UPF','UPOIC','UREKA','UT','UTP','UV','UVAN','VARO','VCOM','VGI','VIBHA','VIH','VL','VNG','VNT','VPO','VRANDA','W','WACOAL','WAVE','WGE','WHA','WHAUP','WICE','WIIK','WIN','WINMED','WINNER','WORK','WP','WPH','XO','XPG','YGG','YUASA','ZEN','ZIGA','TRUE'];

  // function for handling form submit
  const submitAction = (e) => {
    e.preventDefault();
    setLanguage(input);
    const upper = input.toUpperCase();
    if (stockList.includes(upper)){
      navigate(`/search/${upper}`);
    }else{
      navigate('/404');
    }
    setInput('');
  };

  const [userData, setUserdata] = useState(false);
  useEffect(() => {
    fetch(
      `https://firestore.googleapis.com/v1/projects/bonsai-c2608/databases/(default)/documents/Fundimental/${'ICN'}?key=AIzaSyAQfPN3u3W01Whz6qi8fYXuTadDFKbKR2w`
    )
      .then((response) => response.json())
      .then((userData) => setUserdata(userData));
  }, []);

  if (!userData) {
    return <div />;
  }

  return (
    <div>
      <Typography component="div" theme={theme}>
      
        <div className="firstpage-search">
          <div className="logo">
            <img src="./asset/Logo.svg" width="13%"/>
              <Box className="logo-text">Bonsai</Box>
          </div>
          <div className="searchbar">
            <form onSubmit={submitAction} className='searchbox'>
              <div className='input-group'>
              <input
                type='text'
                className='form-control'
                placeholder='พิมพ์ชื่อหุ้นที่ต้องการค้นหา...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              </div>
            </form>
          </div>
        </div>
      </Typography>
    </div>
    
  );
};

export default Search;