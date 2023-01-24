import { useGetCoinStatsQuery } from "../services";
import { numberFormatter } from "../utility";
import { Skeleton } from "antd";

export default function CoinStats() {
    const { data, isLoading } = useGetCoinStatsQuery(null);
    if (isLoading) return <Skeleton />;
    if (!data) return null;
    return (
        <div className="hero_info_container">
            <div className="hero__total">
                <div className="hero__label">Total Cryptocurrencies</div>
                <div className="hero__data">
                    {data.totalCoins.toLocaleString("en-US")}
                </div>
            </div>

            <div className="hero__total">
                <div className="hero__label">Total Exchanges</div>
                <div className="hero__data">
                    {data.totalExchanges.toLocaleString("en-US")}
                </div>
            </div>

            <div className="hero__total">
                <div className="hero__label">Total Market Cap</div>
                <div className="hero__data">
                    {numberFormatter(+data.totalMarketCap)}
                </div>
            </div>

            <div className="hero__total">
                <div className="hero__label">Total 24h Volume</div>
                <div className="hero__data">
                    {numberFormatter(+data.total24hVolume)}
                </div>
            </div>
        </div>
    );
}
