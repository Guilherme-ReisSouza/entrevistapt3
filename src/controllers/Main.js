import React from "react";

import $ from "jquery";

import {    Graphics00,
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
    Graphics24} from "./Graphics";

function Main(){

    const hideAndShow = () => {

        $("#cereals1").hide();
        $("#cereal2").hide();
        $("#cereals3").hide();
        $("#soda1").hide();
        $("#soda2").hide();
        $("#soda3").hide();
        $("#milk1").hide();
        $("#milk2").hide();
        $("#milk3").hide();
        $("#jeans1").hide();
        $("#jeans2").hide();
        $("#jeans3").hide();
        $("#tshirt1").hide();
        $("#tshirt2").hide();
        $("#tshirt3").hide();
        $("#cap1").hide();
        $("#cap2").hide();
        $("#cap3").hide();
        $("#bed1").hide();
        $("#bed2").hide();
        $("#bed3").hide();
        $("#chair1").hide();
        $("#chair2").hide();
        $("#chair3").hide();
        $("#table1").hide();
        $("#table2").hide();
        $("#table3").hide();
    }

    $(function() { 
        hideAndShow();
        $("#cereals1").show();
    })

    $(function () {
        $("#categoria").on("change",function () {
            var val = $(this).val();
            if (val == "Food") {
                $("#product").html("<option value='Cereals'>Cereals</option><option value='Soda'>Soda</option><option value='Milk'>Milk</option>");
                hideAndShow();
                $("#cereals1").show();
            } 
            else if (val == "Clothes") {
                $("#product").html("<option value='Jeans'>Jeans</option><option value='Tshirt'>Tshirt</option><option value='Cap'>Cap</option>");
                hideAndShow();
                $("#jeans1").show();
            } 
            else if (val == "Furniture") {
                $("#product").html("<option value='Bed'>Bed</option><option value='Chair'>Chair</option><option value='Table'>Table</option>");
                hideAndShow();
                $("#bed1").show();
            }
        });

        $("#product").on("change",function () {
            var val = $(this).val();
            if (val == "Cereals") {
                $("#brand").html("<option value='Cereals1'>Cereals1</option><option value='cereal2'>Cerelas2</option><option value='Cereals3'>Cereals3</option>");
                hideAndShow();
                $("#cereals1").show();
            }
             else if (val == "Soda") {
                $("#brand").html("<option value='Soda1'>Soda1</option><option value='Soda2'>Soda2</option><option value='Soda3'>Soda3</option>");
                hideAndShow();
                $("#soda1").show();
            } 
            else if (val == "Jeans") {
                $("#brand").html("<option value='Jeans1'>Jeans1</option><option value='Jeans2'>Jeans2</option><option value='Jeans3'>Jeans3</option>");
                hideAndShow();
                $("#jeans1").show();
            } 
            else if (val == "Milk") {
                $("#brand").html("<option value='Milk1'>Milk1</option><option value='Milk2'>Milk2</option><option value='Milk3'>Milk3</option>");
                hideAndShow();
                $("#milk1").show();
            } 
            else if (val == "Tshirt") {
                $("#brand").html("<option value='Tshirt1'>Tshirt1</option><option value='Tshirt2'>Tshirt2</option><option value='Tshirt3'>Tshirt3</option>");
                hideAndShow();
                $("#tshirt1").show();
            }
            else if (val == "Cap") {
                $("#brand").html("<option value='Cap1'>Cap1</option><option value='Cap2'>Cap2</option><option value='Cap3'>Cap3</option>");
                hideAndShow();
                $("#cap1").show();
            } 
            else if (val == "Bed") {
                $("#brand").html("<option value='Bed1'>Bed1</option><option value='Bed2'>Bed2</option><option value='Bed3'>Bed3</option>");
                hideAndShow();
                $("#bed1").show();
            } 
            else if (val == "Chair") {
                $("#brand").html("<option value='Chair1'>Chair1</option><option value='Chair2'>Chair2</option><option value='Chair3'>Chair3</option>");
                hideAndShow();
                $("#chair1").show();
            } 
            else if (val == "Table") {
                $("#brand").html("<option value='Table1'>Table1</option><option value='Table2'>Table2</option><option value='Table3'>Table3</option>");
                hideAndShow();
                $("#table1").show();
            } 
        });

        $("#brand").on("change",function () {
            var val = $(this).val();
            if($('#brand').val().length < 1){
                $('#cereals1').hide();
                $('#cereal2').hide();
                $('#cereals3').hide();
            } 

            else{

                if (val == "Cereals1"){
                    $('#cereals1').show();
                } else {
                    $('#cereals1').hide(); 
                }
                if (val == "cereal2"){
                    $('#cereal2').show();
                } else {
                    $('#cereal2').hide();
                }
                if (val == "Cereals3"){
                    $('#cereals3').show();
                } else {
                    $('#cereals3').hide();
                }

                if (val == "Soda1"){
                    $('#soda1').show();
                } else {
                    $('#soda1').hide();
                }
                if (val == "Soda2"){
                    $('#soda2').show();
                } else {
                    $('#soda2').hide();
                }
                if (val == "Soda3"){
                    $('#soda3').show();
                } else {
                    $('#soda3').hide();
                }

                if (val == "Milk1"){
                    $('#milk1').show();
                } else {
                    $('#milk1').hide();
                }
                if (val == "Milk2"){
                    $('#milk2').show();
                } else {
                    $('#milk2').hide();
                }
                if (val == "Milk3"){
                    $('#milk3').show();
                } else {
                    $('#milk3').hide();
                }


                if (val == "Jeans1"){
                    $('#jeans1').show();
                } else {
                    $('#jeans1').hide();
                }
                if (val == "Jeans2"){
                    $('#jeans2').show();
                } else {
                    $('#jeans2').hide();
                }
                if (val == "Jeans3"){
                    $('#jeans3').show();
                } else {
                    $('#jeans3').hide();
                }

                if (val == "Tshirt1"){
                    $('#tshirt1').show();
                } else {
                    $('#tshirt1').hide();
                }
                if (val == "Tshirt2"){
                    $('#tshirt2').show();
                } else {
                    $('#tshirt2').hide();
                }
                if (val == "tshirt3"){
                    $('#tshirt3').show();
                } else {
                    $('#tshirt3').show();
                }

                if (val == "Cap1"){
                    $('#cap1').show();
                } else {
                    $('#cap1').hide();
                }
                if (val == "Cap2"){
                    $('#cap2').show();
                } else {
                    $('#cap2').hide();
                }
                if (val == "Cap3"){
                    $('#cap3').show();
                } else {
                    $('#cap3').show();
                }


                if (val == "Bed1"){
                    $('#bed1').show();
                } else {
                    $('#bed1').hide();
                }
                if (val == "Bed2"){
                    $('#bed2').show();
                } else {
                    $('#bed2').hide();
                }
                if (val == "Bed3"){
                    $('#bed3').show();
                } else {
                    $('#bed3').show();
                }

                if (val == "Chair1"){
                    $('#chair1').show();
                } else {
                    $('#chair1').hide();
                }
                if (val == "Chair2"){
                    $('#chair2').show();
                } else {
                    $('#chair2').hide();
                }
                if (val == "Chair3"){
                    $('#chair3').show();
                } else {
                    $('#chair3').show();
                }

                if (val == "Table1"){
                    $('#table1').show();
                } else {
                    $('#table1').hide();
                }
                if (val == "Table2"){
                    $('#table2').show();
                } else {
                    $('#table2').hide();
                }
                if (val == "Table3"){
                    $('#table3').show();
                } else {
                    $('#table3').show();
                }
  
            }
        });
        
    });
    return (
        <body>
            <div className="options">
            <div className="col">
                <label for="Category">Category: </label>
                <select id="categoria">
                    <option value="Food">Food</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Furniture">Furniture</option>
                </select>
            </div>
            
            <div className="col">
                <label for="Product">Product: </label>
                <select id="product">
                    <option value="Cereals">Cereals</option>
                    <option value="Soda">Soda</option>
                    <option value="Milk">Milk</option>
                </select>
            </div>

            <div className="col">
                <label for="Brand">Brand: </label>
                <select id="brand">
                    <option value="Cereals1">Cereals1</option>
                    <option value="cereal2">cereal2</option>
                    <option value="Cereals3">Cereals3</option>
                </select>
            </div>
        </div>

        <div className="text">
            <h2>Sales By Month for:</h2>
        </div>

        <div className="chart" id="cereals1">

            <Graphics00 path= {{categoria: "foods", produto: "product1", marca: "brand1"}} />
            
        </div>

        <div className="chart" id="cereal2">

            <Graphics01 path= {{categoria: "foods", produto: "product1", marca: "brand2"}} />
            
        </div>

        <div className="chart" id="cereals3">

            <Graphics0 path= {{categoria: "foods", produto: "product1", marca: "brand3"}} />
            
        </div>
        <div className="chart" id="soda1">

            <Graphics1 path= {{categoria: "foods", produto: "product2", marca: "brand1"}} />
            
        </div>
        <div className="chart" id="soda2">

            <Graphics2 path= {{categoria: "foods", produto: "product2", marca: "brand2"}} />
            
        </div>

        <div className="chart" id="soda3">

            <Graphics3 path= {{categoria: "foods", produto: "product2", marca: "brand3"}} />
            
        </div>
        <div className="chart" id="milk1">

            <Graphics4 path= {{categoria: "foods", produto: "product3", marca: "brand1"}} />
            
        </div>
        <div className="chart" id="milk2">

            <Graphics5 path= {{categoria: "foods", produto: "product3", marca: "brand2"}} />
            
        </div>
        <div className="chart" id="milk3">

            <Graphics6 path= {{categoria: "foods", produto: "product3", marca: "brand3"}} />
            
        </div>


        <div className="chart" id="jeans1">

            <Graphics7 path= {{categoria: "clothes", produto: "product1", marca: "brand1"}} />
            
        </div>
        <div className="chart" id="jeans2">

            <Graphics8 path= {{categoria: "clothes", produto: "product1", marca: "brand2"}} />
            
        </div>
        <div className="chart" id="jeans3">

            <Graphics9 path= {{categoria: "clothes", produto: "product1", marca: "brand3"}} />
            
        </div>

        <div className="chart" id="tshirt1">

            <Graphics10 path= {{categoria: "clothes", produto: "product2", marca: "brand1"}} />
            
        </div>
        <div className="chart" id="tshirt2">

            <Graphics11 path= {{categoria: "clothes", produto: "product2", marca: "brand2"}} />
            
        </div>
        <div className="chart" id="tshirt3">

            <Graphics12 path= {{categoria: "clothes", produto: "product2", marca: "brand3"}} />
            
        </div>

        <div className="chart" id="cap1">

            <Graphics13 path= {{categoria: "clothes", produto: "product3", marca: "brand1"}} />
            
        </div>
        <div className="chart" id="cap2">

            <Graphics14 path= {{categoria: "clothes", produto: "product3", marca: "brand2"}} />
            
        </div>
        <div className="chart" id="cap3">

            <Graphics15 path= {{categoria: "clothes", produto: "product3", marca: "brand3"}} />
            
        </div>



        <div className="chart" id="bed1">

            <Graphics16 path= {{categoria: "furniture", produto: "product1", marca: "brand1"}} />
            
        </div>
        <div className="chart" id="bed2">

            <Graphics17 path= {{categoria: "furniture", produto: "product1", marca: "brand2"}} />
            
        </div>
        <div className="chart" id="bed3">

            <Graphics18 path= {{categoria: "furniture", produto: "product1", marca: "brand3"}} />
            
        </div>

        <div className="chart" id="chair1">

            <Graphics19 path= {{categoria: "furniture", produto: "product2", marca: "brand1"}} />
            
        </div>
        <div className="chart" id="chair2">

            <Graphics20 path= {{categoria: "furniture", produto: "product2", marca: "brand2"}} />
            
        </div>
        <div className="chart" id="chair3">

            <Graphics21 path= {{categoria: "furniture", produto: "product2", marca: "brand3"}} />
            
        </div>

        <div className="chart" id="table1">

            <Graphics22 path= {{categoria: "furniture", produto: "product3", marca: "brand1"}} />
            
        </div>
        <div className="chart" id="table2">

            <Graphics23 path= {{categoria: "furniture", produto: "product3", marca: "brand2"}} />
            
        </div>
        <div className="chart" id="table3">

            <Graphics24 path= {{categoria: "furniture", produto: "product3", marca: "brand3"}} />
            
        </div>



        </body>
    );

}

export default Main;