import React from "react";

import {BarChart,Bar,XAxis,YAxis,Tooltip,CartesianGrid,ResponsiveContainer} from "recharts";


const chartData = {
    "foods": {
        "product1": {
            "brand1": {
                "january": 200,
                "february": 300,
                "march": 500,
                "april":100
            },
            "brand2": {
                "january": 100,
                "february": 300,
                "march": 200,
                "april":600
            },
            "brand3": {
                "january": 600,
                "february": 500,
                "march": 400,
                "april":300
            }
        },
        "product2": {
            "brand1": {
                "january": 200,
                "february": 300,
                "march": 500,
                "april":100
            },
            "brand2": {
                "january": 100,
                "february": 300,
                "march": 200,
                "april":600
            },
            "brand3": {
                "january": 600,
                "february": 500,
                "march": 400,
                "april":300
            }
        },
        "product3": {
            "brand1": {
                "january": 200,
                "february": 300,
                "march": 500,
                "april":100
            },
            "brand2": {
                "january": 100,
                "february": 300,
                "march": 200,
                "april":600
            },
            "brand3": {
                "january": 600,
                "february": 500,
                "march": 400,
                "april":300
            }
        }
    },
    "clothes": {
        "product1": {
            "brand1": {
                "january": 200,
                "february": 300,
                "march": 500,
                "april":100
            },
            "brand2": {
                "january": 100,
                "february": 300,
                "march": 200,
                "april":600
            },
            "brand3": {
                "january": 600,
                "february": 500,
                "march": 400,
                "april":300
            }
        },
        "product2": {
            "brand1": {
                "january": 200,
                "february": 300,
                "march": 500,
                "april":100
            },
            "brand2": {
                "january": 100,
                "february": 300,
                "march": 200,
                "april":600
            },
            "brand3": {
                "january": 600,
                "february": 500,
                "march": 400,
                "april":300
            }
        },
        "product3": {
            "brand1": {
                "january": 200,
                "february": 300,
                "march": 500,
                "april":100
            },
            "brand2": {
                "january": 100,
                "february": 300,
                "march": 200,
                "april":600
            },
            "brand3": {
                "january": 600,
                "february": 500,
                "march": 400,
                "april":300
            }
        }
    },
    "furniture": {
        "product1": {
            "brand1": {
                "january": 200,
                "february": 300,
                "march": 500,
                "april":100
            },
            "brand2": {
                "january": 100,
                "february": 300,
                "march": 200,
                "april":600
            },
            "brand3": {
                "january": 600,
                "february": 500,
                "march": 400,
                "april":300
            }
        },
        "product2": {
            "brand1": {
                "january": 200,
                "february": 300,
                "march": 500,
                "april":100
            },
            "brand2": {
                "january": 100,
                "february": 300,
                "march": 200,
                "april":600
            },
            "brand3": {
                "january": 600,
                "february": 500,
                "march": 400,
                "april":300
            }
        },
        "product3": {
            "brand1": {
                "january": 200,
                "february": 300,
                "march": 500,
                "april":100
            },
            "brand2": {
                "january": 100,
                "february": 300,
                "march": 200,
                "april":600
            },
            "brand3": {
                "january": 600,
                "february": 500,
                "march": 400,
                "april":300
            }
        }
    }
};

function Graphics00(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

function Graphics01(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
function Graphics0(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
function Graphics1(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
function Graphics2(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
function Graphics3(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
function Graphics4(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
function Graphics5(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
function Graphics6(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
function Graphics7(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
function Graphics8(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
function Graphics9(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
function Graphics10(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
function Graphics11(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
function Graphics12(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
function Graphics13(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
function Graphics14(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
function Graphics15(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
function Graphics16(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
function Graphics17(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};function Graphics18(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};function Graphics19(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};function Graphics20(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};function Graphics21(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};function Graphics22(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};function Graphics23(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};function Graphics24(props){

    

    const data = [
        { name:"january", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["january"]},
        { name:"february", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["february"]},
        { name:"march", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["march"]},
        { name:"april", uv: chartData[props.path.categoria][props.path.produto][props.path.marca]["april"]}
    ]; 

    return (
        <div>
            <ResponsiveContainer width='100%' aspect={4.0/1.1}>
                <BarChart className="chart-size" width={1000} height={400} data={data}>
                    <XAxis dataKey="name" stroke="#95ceff" />
                    <YAxis tickCount={7}/>
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                    <Bar dataKey="uv" fill="#95ceff" barSize={200} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export{

    Graphics00,
    Graphics01,
    Graphics0,
    Graphics1,
    Graphics2,
    Graphics3,
    Graphics4,
    Graphics5,
    Graphics6,
    Graphics7,
    Graphics8,
    Graphics9,
    Graphics10,
    Graphics11,
    Graphics12,
    Graphics13,
    Graphics14,
    Graphics15,
    Graphics16,
    Graphics17,
    Graphics18,
    Graphics19,
    Graphics20,
    Graphics21,
    Graphics22,
    Graphics23,
    Graphics24
};