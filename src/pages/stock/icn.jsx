import React, { useState } from "react";
import { Content } from "../../data/content";
import { StrictMode } from "react";
import Layout from "../../components/header";
import AllResultsCard from "../../components/allResultsCard";
import Header from "../../components/header";
import { useEffect } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { FaRegNewspaper } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import "./stock.css";
import { Box } from "@mui/system";
import { createTheme, Typography } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: ["Kanit", "sans-serif"].join(","),
  },
});


function ICN() {
  const icn = Content.filter((item) => item.category === "icn");

  const [userData, setUserdata] = useState(false);
  useEffect(() => {
    fetch(
      "https://firestore.googleapis.com/v1/projects/bonsai-c2608/databases/(default)/documents/Fundimental/ICN?key=AIzaSyAQfPN3u3W01Whz6qi8fYXuTadDFKbKR2w"
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
      -6
    )
  };
  return (
    <div className="main">
      <Header />
     
      
        
        <AllResultsCard results={icn} />
        <div className="fund-box">
      <Typography component="div" theme={theme}>
        <Box className="stock-title">ICN</Box>
        <Link className="linkto-new" to="/icnnews"><button className="link-new">
          <FaRegNewspaper className="link-logo" />
          <Box className="link-new-text">
            &nbsp;&nbsp;&nbsp;News&nbsp;&nbsp;
          </Box>
          <IoIosArrowForward
            className="link-logo"
            style={{ color: "#2EAA49" }}
          />
        </button></Link>

        <Box className="fundamental-topic">สถิติสำคัญ</Box>
        <div className="over">
          <Grid container>
            <Grid className="timeline" item xs={3.5}>
              <p>ICN</p>
            </Grid>

            {getField("IS", "timeLine")
              .map((info, idx) => (
                <Grid className="timeline" item xs={1.25}>
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
                <Grid className="light-table" item xs={1.25}>
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
                <Grid className="dark-table" item xs={1.25}>
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
                <Grid className="light-table" item xs={1.25}>
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
                <Grid className="dark-table" item xs={1.25}>
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
              <Grid className="light-table" item xs={1.25}>
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
              <Grid className="dark-table" item xs={1.25}>
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
              <Grid className="light-table" item xs={1.25}>
                {info.stringValue}
              </Grid>
            ))}
          </Grid>
        </div>
        <Box className="fundamental-topic">สรุปการเติบโต</Box>
        <Grid container>
          <Grid className="timeline" item xs={3.5}>
            <p>ICN</p>
          </Grid>
          {getField("S10YG", "timeLine")
              .map(
            (info, idx) => (
              <Grid className="timeline" item xs={1.25}>
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
              <Grid className="light-table" item xs={1.25}>
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
              <Grid className="dark-table" item xs={1.25}>
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
              <Grid className="light-table" item xs={1.25}>
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
            <Grid className="dark-table" item xs={1.25}>
              {info.stringValue}
            </Grid>
          ))}
        </Grid>

        <Grid container>
          <Grid className="topic-light-table" item xs={3.5}>
            <p>กำไรต่อหุ้น (EPS)</p>
          </Grid>
          {getField("S10YG", "ProfitPerStock").map((info, idx) => (
            <Grid className="light-table" item xs={1.25}>
              {info.stringValue}
            </Grid>
          ))}
        </Grid>
        <Grid container>
          <Grid className="topic-dark-table" item xs={3.5}>
            <p>การเติบโตต่อปีของกำไรต่อหุ้น (%)</p>
          </Grid>
          {getField("S10YG", "PPSGrowthPerYear").map((info, idx) => (
            <Grid className="dark-table" item xs={1.25}>
              {info.stringValue}
            </Grid>
          ))}
        </Grid>

        <Box className="fundamental-topic">อัตราส่วนทางการเงิน</Box>
        <Grid container>
          <Grid className="timeline" item xs={3.5}>
            <p>ICN</p>
          </Grid>
          {getField("ROF", "timeLine").map(
            (info, idx) => (
              <Grid className="timeline" item xs={1.25}>
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
              <Grid className="light-table" item xs={1.25}>
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
              <Grid className="dark-table" item xs={1.25}>
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
              <Grid className="light-table" item xs={1.25}>
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
              <Grid className="dark-table" item xs={1.25}>
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
            <Grid className="light-table" item xs={1.25}>
              {info.stringValue}
            </Grid>
          ))}
        </Grid>

        <Grid container>
          <Grid className="topic-dark-table" item xs={3.5}>
            <p>หนี้สิน/ทุน (เท่า)</p>
          </Grid>
          {getField("ROF", "debt/fund").map((info, idx) => (
            <Grid className="dark-table" item xs={1.25}>
              {info.stringValue}
            </Grid>
          ))}
        </Grid>
        <Grid container>
          <Grid className="topic-light-table" item xs={3.5}>
            <p>วงจรเงินสด (วัน)</p>
          </Grid>
          {getField("ROF", "cashCycle").map((info, idx) => (
            <Grid className="light-table" item xs={1.25}>
              {info.stringValue}
            </Grid>
          ))}
        </Grid>
        <Box className="fundamental-topic">สรุปการเงิน</Box>
        <Grid container>
          <Grid className="timeline" item xs={3.5}>
            <p>ICN</p>
          </Grid>
          {getField("S10YF", "timeLine").map(
            (info, idx) => (
              <Grid className="timeline" item xs={1.25}>
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
            <Grid className="light-table" item xs={1.25}>
              {info.stringValue}
            </Grid>
          ))}
        </Grid>
        <Grid container>
          <Grid className="topic-dark-table" item xs={3.5}>
            <p>หนี้สินรวม</p>
          </Grid>
          {getField("S10YF", "totalDebt").map((info, idx) => (
            <Grid className="dark-table" item xs={1.25}>
              {info.stringValue}
            </Grid>
          ))}
        </Grid>
        <Grid container>
          <Grid className="topic-light-table" item xs={3.5}>
            <p>ส่วนของผู้ถือหุ้น</p>
          </Grid>
          {getField("S10YF", "shareHolder").map((info, idx) => (
            <Grid className="light-table" item xs={1.25}>
              {info.stringValue}
            </Grid>
          ))}
        </Grid>
      </Typography>
      <Grid container>
        <Grid className="topic-dark-table" item xs={3.5}>
          <p>มูลค่าหุ้นที่เรียกชำระแล้ว</p>
        </Grid>
        {getField("S10YF", "PUShareValue").map((info, idx) => (
          <Grid className="dark-table" item xs={1.25}>
            {info.stringValue}
          </Grid>
        ))}
      </Grid>
      <Grid container>
        <Grid className="topic-light-table" item xs={3.5}>
          <p>รายได้รวม</p>
        </Grid>
        {getField("S10YF", "totalIncome").map((info, idx) => (
          <Grid className="light-table" item xs={1.25}>
            {info.stringValue}
          </Grid>
        ))}
      </Grid>
      <Grid container>
        <Grid className="topic-dark-table" item xs={3.5}>
          <p>กำไรขั้นต้น</p>
        </Grid>
        {getField("S10YF", "grossProfit").map((info, idx) => (
          <Grid className="dark-table" item xs={1.25}>
            {info.stringValue}
          </Grid>
        ))}
      </Grid>
      <Grid container>
        <Grid className="topic-light-table" item xs={3.5}>
          <p>ค่าใช้จ่ายในการขายและบริหาร</p>
        </Grid>
        {getField("S10YF", "sellingServiceExpenses").map((info, idx) => (
          <Grid className="light-table" item xs={1.25}>
            {info.stringValue}
          </Grid>
        ))}
      </Grid>
      <Grid container>
        <Grid className="topic-dark-table" item xs={3.5}>
          <p>กำไรสุทธิ</p>
        </Grid>
        {getField("S10YF", "depreciaNAmortiza").map((info, idx) => (
          <Grid className="dark-table" item xs={1.25}>
            {info.stringValue}
          </Grid>
        ))}
      </Grid>
      <Grid container>
        <Grid className="topic-light-table" item xs={3.5}>
          <p>ค่าเสื่อมราคาและค่าตัดจำหน่าย</p>
        </Grid>
        {getField("S10YF", "opCashFlow").map((info, idx) => (
          <Grid className="light-table" item xs={1.25}>
            {info.stringValue}
          </Grid>
        ))}
      </Grid>
      <Grid container>
        <Grid className="topic-dark-table" item xs={3.5}>
          <p>กระแสเงินสดจากการดำเนินงาน</p>
        </Grid>
        {getField("S10YF", "investCashFlow").map((info, idx) => (
          <Grid className="dark-table" item xs={1.25}>
            {info.stringValue}
          </Grid>
        ))}
      </Grid>
      <Grid container>
        <Grid className="topic-light-table" item xs={3.5}>
          <p>กระแสเงินสดจากการลงทุน</p>
        </Grid>
        {getField("S10YF", "finanActCashFlow").map((info, idx) => (
          <Grid className="light-table" item xs={1.25}>
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
            <Grid className="dark-table" item xs={1.25}>
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
          <Grid className="light-table" item xs={1.25}>
            {info.stringValue}
          </Grid>
        ))}
      </Grid>
    </div>
      
    </div>
  );
}
export default ICN;
