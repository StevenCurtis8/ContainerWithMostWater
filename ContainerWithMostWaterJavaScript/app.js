const btn=document.getElementById('btn');

function maxArea(height) {
    
    let maxArea=0, start=0
    let end=height.length - 1
    let currArea
    let l

    while((end-start) > 0){
        currArea=0
        l=end-start
        if(height[end] < height[start]){
            currArea=l * height[end] //its max area so lxb where b is max height
            maxArea=Math.max(maxArea, currArea)
            end=end-1 //so that the two ends converge
        }
        else{
            currArea=l * height[start] //its max area so lxb where b is max height
            maxArea=Math.max(maxArea, currArea)
            start=start+1
        }

    }
    return maxArea
};

btn.addEventListener('click',function(){ 
    const allTestInput =[
        [1,8,6,2,5,4,8,3,7], 
        [1,1], 
        [4,3,2,1,4], 
        [1,2,1],
        [1,8,6,2,5,4,8,3,7,1,1,4,3,2,1,4,1,2,1],
        [1,33,6,4,5,18,7,8,45,2,5,11,6,7,4,21,5,7,8,12,34,15,1,17,22,15,12,4,2,7,5,5,7,8,1,6,22,3,17,13,2,18],
        [3690,7683,9156,8637,6242,1881,9505,3803,3840,7101,3490,217,9335,5318,6480,5592,931,1424,6068,7927,6649,608,6239,3507,2575,3407,3948,636,2483,3672,4907,6173,7707,4063,1162,301,2296,667,4104,2488,4120,3946,2705,3456,9265,9186,9048,6548,6962,1468,4475,3612,2076,715,3471,4651,474,7419,1640,9309,7443,6547,1834,1502,610,2996,1803,9258,15,5908,1746,4136,9854,803,3944,5471,6341,9344,2019,3304,812,2847,6916,2888,9914,387,3892,388,4158,5532,9697,1602,2079,1531,3104,9041,879,4908,8299,7246,7168,6397,7734,3374,7200,1678,8846,3542,1022,7217,6846,1834,64,114,4723,9978,501,8615,366,1011,4147,6415,2613,2578,4298,2070,1619,5177,6978,9918,8776,4146,6315,6510,3872,9867,8189,2718,3409,5563,9936,6607,7398,6352,6721,8473,6331,3574,7088,3049,4586,7587,9465,3551,165,115,5621,1784,5293,2599,8054,421,3097,721,6931,6970,588,1472,6040,350,7036,2328,6957,786,8681,3679,9259,5012,3605,6347,4413,4543,286,230,8095,451,346,3716,8587,1991,2668,2993,2412,5765,3714,5695,9087,654,7168,5128,1004,556,3808,4314,1342,2489,4345,601,3853,7950,3300,8267,2494,3586,8497,589,389,8843,657,5328,834,3325,4673,3246,5443,8387,5294,4530,5393,2462,6010,2750,9370,9819,7064,712,8660,1409,7665,2514,5711,7317,781,8205,903,5630,5146,7644,826,2156,9324,1660,5481,3997,1259,924,8736,6553,1807,4129,5367,4169,3231,4737,3988,295,1801,2649,1704,5818,1515,3768,3135,8648,1973,390,4278,3472,4386,5104,5628,3710,3117,7461,7707,728,4738,2795,3633,6545,6924,5352,7066,156,6441,1055,6803,8242,56,4860,412,7923,8628,3547,6571,6953,3937,7201,6777,8323,2306,2405,2033,1775,6219,6092,8855,957,8887,2488,3854,2163,4192,920,8671,633,8327,5475,5227,4735,6687,5639,2658,5315,9186,5581,2268,9475,2783,9046,7798,5089,7803,6183,3216,4022,8627,2071,1331,7514,911,1537,6029,5103,2458,4701,5736,7137,6528,7315,8225,3215,2954,883,8530,2140,6465,7150,1615,9248,2548,5765,689,352,1948,257,726,575,8680,8410,4441,9591,9947,470,1046,8757,1523,3134,2247,8051,449,472,7618,9755,1355,2500,8247,4172,9651,9862,9772,8551,1979,6813,5255,279,7070,5982,7206,2102,744,1647,8045,7043,8469,9091,5801,6345,8577,4400,4396,5378,4872,8367,5133,2579,867,3380,6752,6870,9594,2876,5422,1573,9690,7029,1852,3112,9363,5410,5215,107,7057,3260,7151,1879,8704,9304,8224,7281,3704,8972,2660,4928,7339,7793,7507,4559,1174,611,7781,7120,3488,9555,8694,3178,6585,6898,2642,5948,2309,7857,2408,5718,7470,5911,3949,6174,1567,2173,9807,1623,7498,2467,6551,1189,6613,4058,2100,4139,4670,9882,1259,4510,9437,6305,4040,2374,9556,6682,4675,8217,892,7083,287,4714,2994,4237,888,4561,2762,7047,6184,6612,5867,9087,7802,8832,3145,9902,2971,4167,6136,582,8677,1926,3240,2717,4300,2796,5752,8975,7365,6644,6058,7652,1358,5404,8241,8598,6317,7356,5645,8853,3968,7864,7940,1770,6696,7438,8025,6019,1605,4161,6602,6635,6087,6194,5704,6740,8990,1456,5715,2707,4452,8126,359,5810,9882,4953,760,6200,2309,2758,5053,6277,622,9346,4400,3671,6784,8777,9690,4741,2938,6292,1376,5378,2486,3433,2118,7828,4889,4185,535,9342,8663,7247,1504,8546,8552,8617,1098,861,1375,6151,3490,8349,5497,4242,2020,2281,3019,1711,3375,2310,4355,4751,4040,3194,8184,6158,7374,9426,6695,4262,5120,5359,7861,6624,257,6413,1593,1355,3626,9320,7506,7116,7670,9356,1359,6042,7989,730,4105,1364,9392,4813,2468,3432,8007,652,5942,1733,6430,2638,5995,1550,4349,3856,4527,4606,269,6120,5961,3895,5441,9819,7364,9463,9175,5075,1857,3517,2157,5963,1233,1550,7128,3701,4982,1487,706,925,3220,7136,9915,9216,8687,4264,9424,3214,5222,6046,5686,1183,6293,1127,1002,3657,6942,6530,5084,8800,6399,7242,1115,7632,8792,8243,1334,126,9730,2040,7403,2950,9176,7318,8518,4215,7934,7943,7429,3156,3989,3116,691,282,595,8046,292,7538,4576,5376,2690,7327,2618,157,4959,7762,8400,6293,7889,4482,4685,5292,3784,214,8963,8655,4429,3249,6598,1859,6406,6939,1327,7097,3573,8274,5143,3865,2164,6071,5594,4854,3398,4564,1363,4710,2327,6115,1003,6568,597,2041,8212,734,2255,7175,9389,6684,425,2339,4895,3183,9278,2574,6632,2851,849,8128,3069,9365,4199,8663,4220,3950,3227,1935,8660,1906,8051,6015,8474,5000,8056,6687,5734,6663,214,5123,3348,6991,3814,4595,6526,3092,7170,3159,2296,4371,1287,1717,3736,1838,6732,4308,5788,6311,6244,800,8218,647,6816,3044,5647,1224,6083,1382,7888,2650,2857,7588,9641,6672,2183,6168,6116,5705,5679,4764,76,6966,6481,165,5156,3213,4473,945,9525,7069,8097,4095,7716,1265,7139,3364,2490,3223,1098,378,5873,307,4318,1866,3331,6501,4386,9448,2207,65,564,8635,3383,7046,5152,8540,6611,5978,5837,6136,3047,3934,6583,7116,5200,3723,6832,4042,3298,4282,772,9171,4589,5090,7389,7921,7943,1776,3721,6502,1841,637,5138,5225,7683,6642,117,647,2620,5954,3135,2020,6240,9719,9136,7792,3442,5968,1834,6740,250,8958,2263,1191,4048,9652,5464,1992,1428,5537,8494,9622,6175,9984,1199,210,6627,1316,857,5599,3622,3993,7619,6214,64,6755,4007,3506,9075,2193,6598,5677,1152,8861,6869,1552,4865,8685,9896,2646,4223,4743,2268,398,4727,9819,608,7706,7487,1466,9658,1109,1811,7277,3675,1875,385,7682,1733,9460,6228,8331,1490,3732,3544,4711,1636,4761,3396,1533,7407,7619,6276,6027,8017,7355,5846,8626,1414,3333,6444,1072,794,4607,4701,4470,2834,5086,8504,4567,899,4732,9250,2389,4816,9146,7100,6453,3907,496,7986,7667,8116,614,3694,2485,4321,9541,7463,5735,9226,259,3159,21,4866,7861,4491,4052,2947,2995,8619,3846,4080,4221,2587,8896,3367,9687,1701,3627,6536,6039,1294,1004,6653,4988,3489,975,881,953,3062,108,7564,6222,129,8783,435,972,2835,3382,319,7807,3581,4399,2028,6168,9648,1748,2208,1349,1727,8744,7389,3021,6100,394,4361,9589,1369,1595,6894,784,1703,4459,3358,8184,3242,3793,9156,6077,7175,9475,3884,7108,227,2265,9629,9875,4013,1837,7576,5740,6933,1317,5113,3033,1712,5826,8974,9433,7421,5869,217,9124,6680,3575,3660,6274,3720,9168,2351,7248,8644,2588,4356,5223,1205,3985,1450,1570,2174,9026,7310,9107,344,8775,8492,8408,4601,7467,7841,2023,9688,4411,7499,6368,7986,7512,2642,1707,6680,1345,8955,1676,285,9663,6899,1490,1,8349,3060,2175,3728,6722,7635,424,5497,2479,8832,6451,9946,6673,4826,5986,1084,8677,2354,5423,6189,1348,3482,2870,9046,8789,4546,9331,8452,7798,7174,4805,6147,234,6981,6227,3309,968,6651,8806,3447,5483,1609,9746,8509,6435,5732,5945,5113,4439,1368,1302,2139,1202,524,1185,9991,5071,517,4796,9221,7691,5953,1720,4277,2934,7948,7586,254,4599,2745,54,6435,706,9800,4944,7142,1884,7241,8607,2675,4962,6261,4815,6164,6786,6000,2508,8209,2869,3656,7430,6912,9609,9150,1190,8896,7098,5128,5502,8050,4225,5556,4485,4932,5356,5781,2074,3593,9374,7033,6268,4336,3294,1083,6853,80,3436,5713,4641,6305,9369,2071,9570,5330,1222,7112,578,4672,2240,6081,9074,2818,1637,9911,7750,3346,5692,6176,6939,1419,3209,3207,5755,2855,643,8960,2936,4079,4673,7577,6736,394,6001,6306,5725,3575,3418,2655,4599,2011,8736,3674,4829,6726,3585,8931,72,5630,5107,7011,7049,4668,6570,2804,7523,7213,1765,459,7644,2790,4389,733,3185,6742,7039,5262,317,6810,7917,4916,5173,3006,4942,6354,9732,8528,5285,9804,4158,6744,3167,1207,1412,6089,363,8935,9655,8480,5747,3651,1271,6488,4384,808,3230,1424,6070,9899,4586,3987,1167,6111,3345,6110,2465,3077,4638,4102,9233,5148,846,8752,6355,2258,1194,3070,1193,849,1551,3292,4500,9174,9780,8885,9982,3010,6661,2404,9261,7599,6391,429,3710,6089,6539,2527,9166,7529,6629,4752,2677,3827,3504,5384,6085,4698,8454,3630,1899,6357,6923,6400,5531,6703,1637,1865,6066,4650,4269,5327,2249,7013,2108,2311,3102,8647,4838,2268,2528,7819,3372,5205,1646,3229,6941,4083,7927,5396,4065,6179,1753,7340,8931,3637,396,568,1854,6462,5218,6124,8141,3819,3137,250,6130,2591,5249,7320,1211,7778,5139,4584,9335,3137,7813,6277,3572,2092,8025,3989,8271,6130,1330,7202,6119,1726,4122,7974,4540,5692,4098,2681,9511,3587,2931,5641,6178,4533,2961,7389,2311,4452,8325,7998,3941,6138,627,7513,4583,8652,1503,2854,1135,9185,6409,7254,911,6883,5228,5451,2576,5678,8132,2087,5617,7416,4081,1795,1949,7042,5537,612,7847,214,8610,1788,6353,5590,5654,7288,594,3509,142,1729,2694,2903,8984,3605,9787,564,5408,2363,2595,9892,802,8212,3660,4883,8,5609,8278,1897,2573,6125,2111,7536,4265,4816,3126,6271,2104,3720,9780,8599,5450,2474,1502,786,2431,7641,7702,4191,6356,297,4084,7159,8510,7744,8394,4870,9706,6672,6767,2279,9149,5230,9815,3415,47,9293,9686,8503,3014,5819,7102,8464,4645,4957,5602,3429,8950,3304,7620,5307,3602,8056,2466,2112,2153,7212,6982,1859,3885,101,490,3034,5331,6658,2801,1730,5951,8840,234,8965,1011,3688,3781,5656,8645,5735,9085,7596,9040,6706,9255,8994,1114,8073,1106,3267,5285,4440,5126,9170,4541,1969,8557,6224,8627,7710,4307,930,2902,4541,6248,3913,4581,29,5922,9579,5765,5007,3527,1157,8065,2782,151,9180,855,7609,2447,6140,2049,3926,1663,2942,5895,6572,5518,874,634,9825,1804,3537,718,8052,3802,5300,4434,9724,4879,6551,4732,8406,4060,9149,7540,4211,8329,8395,8172,7129,887,221,1055,8902,9515,3302,5474,5033,4176,6109,1211,2332,5998,1929,6737,9800,3581,1171,5877,4812,4074,609,9570,8134,9758,7110,8697,4440,1857,6869,1569,2745,3442,2624,1647,2957,2278,3474,4342,6454,9583,5553,5138,1933,3835,1875,1733,3768,9398,7610,8581,3472,4571,4503,7958,682,1614,6655,1474,9823,9876,3043,8920,3318,2019,568,2627,4297,394,6970,7103,6329,8875,2241,8262,9062,4117,6347,2831,3515,310,7764,3340,4881,2267,1298,1915,233,7954,3389,57,7830,2784,8977,7501,1155,5897,128,5452,6291,3450,8907,2620,2326,1149,7234,1388,1618,3582,571,5133,3892,8335,4825,5125,603,6124,7041,836,430,6782,893,4612,5919,6223,2113,7074,2120,8594,2527,4764,2044,1434,3736,4370,8935,971,2111,553,4553,2682,2039,4797,1018,6864,9922,7973,2988,3315,8809,3418,98,6055,4383,6017,2278,6496,3091,750,1442,1970,5514,3487,9757,9251,4209,8692,222,6320,9246,1127,5355,1285,5924,2725,4501,5846,698,7490,9162,5859,7260,5612,1914,1643,7981,4192,4492,7424,1295,5934,9395,6809,9421,5504,2412,9983,548,8986,6303,9794,113,8010,7431,2389,735,8285,4588,7785,5775,102,3645,9387,5714,5559,1031,3695,6104,1875,1119,7399,4161,6866,560,9935,2370,2973,9918,2919,8311,2573,9065,8425,584,2849,7166,7671,1134,1754,5457,3261,1856,5454,2648,3922,1013,31,7617,3469,1906,5089,7220,2420,8307,7781,2355,7030,7106,2273,6301,5417,4846,1718,194,1782,919,7361,9454,8405,5467,1263,1666,7324,6717,667,1246,4082,698,5216,7552,8957,6657,4772,7729,4964,2553,84,1994,6011,2357,4647,1429,3555,6366,7975,5338,7285,5336,4792,5691,804,6055,3709,4480,9124,4376,2078,3206,1427,7294,758,6736,3951,5531,4465,5268,4436,4549,3614,448,3258,8262,8229,6813,4628,6204,2151,8265,7893,3295,3956,5049,9350,7666,9529,8474,8394,7959,1681,9821,5254,8791,6557,5557,674,7374,7177,5111,1923,792,1911,5181,5406,140,8347,34,2696,498,8299,589,146,8608,5638,9496,2626,1519,4323,1020,9479,2356,842,1085,7499,3751,2994,8174,1126,6524,9637,9401,7316,1548,935,9074,8040,9282,5460,7088,6132,3759,7678,6278,8719,9668,2127,1345,7540,2802,2366,3371,1510,9560,808,9009,3311,3802,3535,789,326,3172,6543,3994,1072,7478,3068,5464,3112,8528,2553,9244,8640,6583,1875,3711,2603,354,5057,143,3156,7423,3514,1018,3335,4322,27,2998,4477,9915,3788,1155,3087,331,1502,512,4161,4570,5976,7273,9451,4881,2869,4443,1464,1096,8154,4068,1450,9563,563,4606,3338,430,5624,6673,1104,2004,9672,5581,1919,3460,3089,1358,143,4591,1870,656,5513,7847,7929,1316,2728,7150,5759,545,8247,266,965,9697,9829,1528,656,3168,8310,2632,9841,9415,4636,9513,1348,2907,9325,4437,618,5820,5380,2488,6476,894,6687,757,8562,5768,7908,4322,6313,6155,940,3630,2204,769,5158,2860,3937,3469,5493,131,9236,6481,5996,584,5741,1674,1374,6359,3846,3106,8847,6675,352,5535,7432,8915,7655,1692,9589,320,4199,529,3950,6404,1298,9108,5616,1588,8929,1109,8071,4517,3943,419,1454,9684,2093,9180,6043,5940,2286,4890,8967,2639,6777,6399,7906,4432,8092,7495,4752,8643,8024,5054,5047,5674,4163,664,3614,9444,8125,8037,314,2068,8457,1768,1752,6902,948,7795,9194,3234,9038,8161,2225,2167,4561,131,2952,9005,3978,4056,7648,2002,9111,9048,4029,9626,6064,3995,5422,4189,2033,5736,2610,6842,7504,714,3744,8452,4862,2939,8039,3900,1100,6616,2419,2013,6748,5371,7370,726,9428,1371,9081,4891,419,9462,4517,2835,3457,9939,7024,1842,5676,5986,8684,3180,6701,8781,7985,1563,1720,2376,1815,9172,8992,4234,1186,2092,9606,8556,9171,5386,6279,8252,277,3050,4066,4794,5885,3875,1085,9262,5718,6761,5248,754,6294,8301,9535,631,9864,7607,3007,1679,6780,8351,2266,7966,444,1872,2874,9615,3610,5506,4219,239,8556,8285,1385,4442,2160,2470,3704,4230,5584,5304,4985,1878,3606,872,8861,3470,8480,1868,1502,5260,219,3768,9578,7015,1992,8804,2982,1954,4310,7201,2193,2867,1838,3578,7309,351,2400,7365,4581,7984,9021,5918,6214,2627,6791,5075,2450,1623,3295,304,3235,9867,424,2813,6882,8768,7969,9865,722,2280,3418,9267,5147,1609,2845,8808,1960,1597,2525,6541,9582,1546,8812,5796,526,1955,7224,2976,3578,519,9632,6813,386,56,5978,3621,8824,3947,9838,9546,2579,9608,8813,4078,1217,8010,2886,3177,5959,1763,6071,5541,9662,4883,7690,188,3190,1266,9516,6768,1785,9148,9933,8524,9204,2263,8497,4380,2562,8335,278,5142,7943,5443,9220,5513,9805,8459,8690,5764,6574,4761,1306,6236,5996,5348,6424,5538,6614,2292,8658,4751,7792,8591,9627,3348,7206,8124,7728,9769,2811,8006,1263,7107,3449,483,2620,3254,5294,7662,9019,1869,8776,6677,8105,4772,8377,882,311,4991,3174,8969,9742,967,3913,5722,4315,7471,3846,8396,3592,6658,6402,4855,117,6204,5339,2737,5810,633,399,1181,2502,9175,7858,6960,300,6235,7842,6963,7578,7368,2284,3673,8335,2549,9395,9003,21,9593,7399,3613,2603,3801,4821,2720,6357,160,1809,2168,7145,8561,3349,6000,7736,7560,2960,4388,147,7154,7703,7726,4522,6340,1399,2858,8889,7146,8213,5262,6739,5612,5228,9343,5765,49,2063,2123,6561,3873,643,58,2434,3992,6058,6522,7904,5370,7263,8052,2524,1318,5778,3399,7658,3529,2609,2900,675,822,8162,7414,6434,9742,3109,8551,9791,1525,7026,2704,1750,7669,2763,4184,8014,5173,7058,5918,544,673,3970,9420,1992,6100,2819,9650,9629,5428,2550,6656,2602,7065,423,5388,6807,3532,3940,2951,5057,966,5655,6807,4988,8418,7343,3002,9944,754,5272,6840,1427,5595,6260,9771,1695,5432,5774,7677,7212,4676,4333,9815,8093,1108,1555,4901,4641,5495,7852,6050,2814,9859,2858,7802,8278,6553,7156,4574,3659,2428,1414,1439,8023,4026,1210,6071,9458,3336,3748,3023,8013,4433,9190,6106,5542,745,7359,183,2593,1563,2585,5407,1423,1795,3209,6053,8349,365,627,8360,9145,2041,9799,7169,6067,1010,3240,1878,698,3340,1253,8711,7773,443,1170,9667,7540,8529,6202,133,93,8788,1892,7868,583,1453,3921,5284,8170,4548,3645,7316,2941,3444,837,5360,806,429,7238,1505,3769,8491,6568,7894,5286,7738,7562,9179,2620,3764,5664,9065,8904,7557,6933,9488,9010,7206,1124,3533,8106,4769,849,1047,8214,1686,6407,5372,8467,9998,6877,2236,4841,3446,6482,128,7536,396,5659,6508,513,1323,5573,9417,5232,8858,5257,595,2416,6382,4128,522,1151,4977,1569,5717,3015,4329,1090,1482,4327,4319,70,9168,4117,2904,5648,8006,3301,1307,4514,3814,8983,6440,9583,4215,1650,4841,4810,4067,1223,8938,4589,8726,267,2511,4444,9634,6840,1886,1116,7519,2557,7538,6687,3027,443,8688,1033,3744,6347,5547,3910,5330,8339,3493,9546,9990,4686,708,4057,5909,5999,4998,4636,6266,3861,5432,5901,701,3670,3369,4572,6227,908,7612,5606,1351,6300,6639,1447,2647,8539,1709,7978,6878,1554,3876,6868,6241,936,7277,2150,6935,8628,3138,3202,2489,4922,5455,9543,8592,5176,4115,1172,6084,1727,6778,3787,4379,9770,1586,3379,8309,3295,7709,5187,4850,1585,8408,7443,2521,2037,9593,5809,665,9084,9011,9507,4006,818,9050,2599,5994,3165,123,8431,1245,3253,8570,5624,3023,157,9003,1332,9804,6712,2872,1006,4649,7632,8449,3523,9669,4395,9332,6687,3479,4695,6194,7485,1865,5244,6436,4211,4761,2911,2642,6006,6165,7565,7983,9188,7722,3338,6873,3878,6403,6097,1237,7404,3729,9686,927,3398,433,6611,6437,3912,1306,2631,7750,3171,4227,538,3735,5341,9802,6377,1347,5967,3942,5682,1507,8016,5373,4732,8247,8128,829,9484,5532,4558,5522,2812,4309,5956,9423,7098,6220,7082,9730,3970,6605,309,861,340,5650,663,3070,3350,2982,3364,5384,4489,1381,757,5574,9628,8885,6403,5464,770,7314,986,9934,7975,6942,5709,5073,3163,2791,4803,3485,5749,1465,698,2441,7115,1361,5511,6817,4343,5228,2202,5185,6609,2959,759,2589,8197,3514,4405,5319,828,5391,5253,8803,8686,962,3877,8201,106,5032,1686,2207,2849,2385,4648,9965,98,6512,6782,794,1740,5336,5979,4701,8296,3090,3642,2845,2956,8047,8164,137,9790,9769,5292,8476,7083,5521,3029,7189,6906,1068,9396,9755,3453,397,6072,9903,3261,2855,697,5001,8191,3028,6054,2839,6118,6048,2036,5427,447,6552,5564,237,2673,856,5066,9757,2730,8095,6946,9636,9163,2695,9391,8968,9444,5464,8872,2705,4671,5921,4058,9214,8950,6464,8406,1420,2512,442,6847,2959,3347,8763,9548,6020,9620,4614,5777,8702,9062,9076,8338,4577,8123,4081,9898,7567,5897,5122,6624,568,1043,7034,6135,9993,3498,4541,1414,6010,1335,4613,5321,1034,3377,4869,7055,9349,5836,9184,8051,1250,4612,6389,5827,2735,6822,2077,6654,2720,7199,9630,9640,8243,6664,5775,8236,162,6668,6002,2524,4356,616,4197,1742,3993,5419,5149,3342,1255,4334,1393,8857,8946,4134,1036,8034,7308,3114,1040,28,313,671,9669,8556,7335,1796,3145,3850,4817,9147,6374,5525,6115,6924,7267,108,2343,2417,9802,3598,3103,7547,2455,8401,8033,3491,6435,5342,6605,3828,5370,3271,4499,1391,1827,1834,9540,1324,5684,4357,6824,8411,6234,2939,5335,3501,9400,7678,2270,9202,7628,5373,6750,6435,127,4783,6278,2914,6477,9236,6742,1848,2507,1241,9591,686,9428,9131,2011,1464,9840,8835,6227,6074,8126,7914,5928,7526,5592,8198,6729,9572,9924,9831,2359,51,966,8638,2965,7444,4226,9708,5644,3085,949,5235,3771,6729,719,2134,8194,559,7321,4421,6634,5448,2336,8914,2974,4280,7112,6055,205,7036,2238,2564,7087,3205,7554,53,7001,8132,6113,2645,1217,7062,4232,1341,3792,4951,3475,8338,1863,7149,2759,4849,2597,1447,3763,1923,5728,875,7979,5933,4264,6569,4849,7703,6126,2404,7756,3127,536,221,2124,8106,3636,2709,9447,3780,7660,9274,2118,5875,6423,1229,724,5372,2677,4487,7296,8405,1715,1627,690,5979,8196,5539,3682,675,4295,7791,3802,1184,8012,2279,9290,8000,4988,8737,1780,9000,4363,3898,1228,7139,5128,1952,2511,7805,2792,6159,2562,4507,7786,3252,6838,2335,5143,520,3010,9439,4663,3164,623,9028,1795,9913,7028,3135,5002,8809,8488,9365,9059,9716,6504,4187,1668,5368,8344,4460,1527,7258,5319,5666,510,2157,4353,5654,9030,7363,1445,3693,6879,2068,9073,8675,1981,6102,1810,3335,1263,6650,2700,322,6366,5557,862,8035,925,5558,8847,8804,2817,4167,4470,9679,6324,8823,1685,5354,2538,3130,5400,9418,1550,4473,4445,3531,6927,2607,6866,4542,9258,5919,4865,5624,7828,2079,11,5105,3989,8859,3909,3158,9378,8380,9190,5702,3555,875,7409,6094,358,2809,1864,1908,3634,6309,1792,562,5268,5010,5104,4526,929,6321,6503,5109,4752,6514,214,5094,1725,4124,8252,1103,8856,7442,3158,2411,4670,567,4857,5028,3376,6721,3288,3362,9382,5080,3924,4651,91,5381,5529,7372,8054,2032,8834,2807,4899,9048,7901,6624,3172,6153,4080,8380,9948,7238,792,4618,7805,5649,5998,7533,8723,9286,895,8105,719,1172,9108,7162,6553,4638,886,4607,3022,9720,3766,7921,5121,1667,898,4645,4173,4978,3026,473,2216,3818,5091,6373,5819,7441,3906,4542,3079,4801,9000,3798,5973,8108,7312,8878,9098,8199,3486,2121,4271,7252,42,9392,5272,940,4038,5797,5918,3416,6270,4486,7234,7713,859,9405,5154,4765,300,8233,5919,9300,8384,8244,3760,2048,7123,2859,247,6961,4980,871,565,5022,6615,5837,2315,7005,7986,4585,421,4256,9072,4007,8321,9931,3413,3475,1049,3713,8061,6968,9365,2797,5212,9477,4845,8687,2336,1445,5648,7316,8668,2566,8691,5283,4755,7358,2289,2742,1943,2710,3350,1015,6718,1672,7299,6483,1499,8348,6548,9560,1668,5913,8709,6880,5390,9907,1920,4079,1352,3920,7747,20,6486,2790,5303,7594,148,3944,336,2092,3007,38,9459,9725,1710,3110,6208,3210,1458,9108,9122,3126,5021,4184,6359,6763,4091,4631,842,5443,8551,8590,1815,1390,1380,3470,8984,7881,7415,5672,6325,6774,5710,2136,6499,3773,5247,9059,3335,3057,8167,8809,6184,9540,2993,8895,2655,7084,9878,3498,8879,4781,8440,7046,6171,6172,517,1507,4053,4284,3531,6730,1058,9242,8867,3909,9367,4114,2968,2702,7171,7487,1511,9707,3379,857,4954,6034,7941,4832,5884,3173,9614,676,219,2137,6849,736,3645,7254,1372,7176,3985,2430,2770,2852,6339,2137,3318,5659,1191,489,9498,9055,6549,2877,9912,1503,5264,4205,6336,1148,7378,2302,8177,7598,4439,1378,4686,8084,8632,6059,1613,8969,4841,735,8173,1181,9225,7843,3192,416,8333,2691,9471,4882,1920,9383,6385,7184,3589,9073,4685,7319,1375,2862,1269,2167,4240,5956,6603,9224,8367,8216,4546,9560,5304,9071,741,4529,6915,286,1297,1600,2977,769,6482,1249,6504,9219,8434,6445,4645,9471,117,2372,8685,1386,4539,9277,3694,1143,8501,8413,5711,9399,7974,1015,8471,5067,5544,1738,5353,6842,3338,4682,3963,6172,5932,6819,5391,718,9617,36,189,9734,2409,8874,7472,3300,8151,1167,4443,3004,5932,155,8756,3906,1170,3579,5326,3067,5317,679,6261,8655,5362,224,4827,1294,3395,6570,2012,9364,2959,8553,9098,1720,3779,2923,5020,1930,442,9464,1286,6374,5971,42,6633,3493,3621,1959,6560,5290,2638,2821,3945,4352,9397,5124,1998,9145,1695,362,8509,1006,8915,3960,2726,2694,6883,4098,976,3677,9914,8615,51,5885,8657,3036,9379,8631,4995,5939,3921,3986,5113,4219,4690,4510,9343,6689,7,7390,7051,8517,4748,2319,2477,7474,1365,5712,7925,8694,9389,7839,7309,9440,3725,2318,8829,9456,7301,3824,1747,7575,4162,6860,1794,8853,7723,7489,1894,7730,1232,5297,2599,5980,3968,5076,9807,5334,788,7732,380,177,5571,7689,5970,5648,6359,4799,1456,3661,4975,3204,7588,5490,6416,9382,695,4139,6871,2589,8222,8103,7886,821,4084,8207,2250,3891,3541,3038,7975,3921,9568,3546,7962,5538,5547,673,6689,7003,686,8016,207,8274,3506,2976,7656,4201,3467,880,6790,1689,5335,1029,8863,5771,9236,1113,6014,9129,503,3989,9402,6423,3888,3716,8313,9435,4389,5002,2790,5076,3019,9350,9702,6525,2326,3711,7079,5793,4591,3869,3835,9926,1250,2698,5698,6838,163,8064,5967,7018,2054,1721,3442,5942,5437,1755,1729,9827,6758,4519,1255,6129,3869,957,9006,2547,1020,6085,8341,5611,6307,2176,1890,3909,1226,3940,748,1389,2004,3067,8407,410,4789,1849,6352,226,9957,4433,6405,3067,5305,4012,9196,5526,1322,4554,8074,2342,6992,6415,4306,3299,4943,6196,7208,6169,6488,7956,3910,8492,7376,2317,8903,2165,519,1607,8743,476,2393,1501,3543,7698,5513,9091,3224,6835,9997,7650,5530,6989,4065,9836,288,5360,2384,3849,1529,8872,8157,1791,7364,5533,4109,2619,4050,980,579,2794,7808,2972,4295,7703,7022,6160,3146,246,9348,3143,7897,4878,133,8314,1066,6773,27,3450,622,7908,2322,8780,9700,6038,665,161,8658,4716,1141,5589,3862,8949,4913,8157,3004,1935,669,6150,8533,17,9293,6430,4895,5778,1097,5961,2552,7476,5763,9526,5384,8085,4658,5084,4124,5324,5245,9134,6392,2738,4723,254,8039,9636,8411,1043,1571,5432,3545,6456,5450,2839,9239,6697,8617,336,9011,7521,7812,4774,7048,9548,2860,8058,4633,6984,9734,6230,6118,6126,8969,7193,6380,3360,3181,1143,756,4752,6576,4301,1208,2026,7140,447,5075,2110,7135,4086,5983,1299,8861,3031,848,1721,7442,1833,5057,7176,8063,7527,3303,3384,4720,9683,6745,7901,7179,7501,9005,3755,1802,6565,2133,5295,3365,7208,3757,6852,7647,9740,4504,6508,9124,5352,4581,6566,3537,9638,3742,1600,3517,3397,1337,4589,9433,4434,8842,6612,8287,7847,6719,6441,764,5204,8088,481,2412,1845,7334,59,1586,8190,2919,710,9894,7500,3628,3431,3490,3722,1383,3359,7120,2720,7948,6553,3506,6790,3165,1793,989,9884,4587,1754,1440,2675,8587,3852,4521,2273,264,2459,463,9535,9521,357,3388,3149,140,3230,6871,1524,6590,3991,596,4538,6896,4103,7681,61,2248,8670,6297,6835,6776,7737,5863,1716,7942,384,3989,4558,9195,4453,4093,8716,1162,7481,8217,1303,712,5088,9179,3654,5432,9775,4544,2328,230,2225,8742,8831,7248,1391,2018,4024,9129,7881,5740,3423,4617,6082,7981,3812,6887,8426,8880,8049,2260,7097,5704,9324,2186,4883,2978,3970,1011,7522,2650,1241,6100,1392,6424,3348,2784,8443,3724,8265,2676,5817,8040,7294,1899,6021,7458,8786,799,6339,3187,9411,3436,8892,8735,1974,127,8065,5944,1138,1940,8595,8732,8040,6339,5156,1388,5475,9951,5112,3740,2628,929,1780,9922,9180,4153,7380,7966,1305,71,1154,716,3508,6398,9452,1834,6525,7517,4131,7664,9457,2726,2748,3849,5417,7904,5237,893,7856,6702,985,484,3983,2766,6758,3164,3271,490,7482,4576,562,8636,5293,422,5034,4745,2256,1560,8614,6387,5576,4424,5465,8324,8273,7235,2580,9863,8128,6788,2917,9113,3624,6900,8231,6734,6416,1503,7225,3899,6079,4139,2535,7724,913,3922,8821,3169,1834,3788,5909,3762,8212,7726,8438,2837,4961,7370,2700,9441,4159,1969,4907,4135,8870,3138,870,1638,993,4447,5537,3425,4938,4425,1149,5851,4699,6323,5372,6533,111,7633,6647,8323,5360,5085,7512,6673,2455,6565,2467,2966,8534,7374,3454,3756,6864,4324,5395,4210,5123,932,7635,61,1709,5136,2264,6408,1459,7636,9293,1570,5270,2292,6245,6982,7377,3758,3655,6185,6675,2474,5503,5209,9848,8957,8966,3065,9633,4361,7275,1108,1645,1262,1169,9707,6398,9785,6115,4210,7422,1761,2132,2692,4053,4730,6026,7783,4840,6033,320,1515,8508,5823,6724,8356,1133,5690,1421,766,6403,5048,8227,4401,6310,5748,4108,9061,5534,6575,9623,2956,4688,1755,2000,8742,6485,8026,2877,1325,4059,3197,2840,2567,5372,5917,7276,6505,7959,5049,3624,4363,98,1851,5116,2760,7599,9224,1821,3133,2151,1444,6089,6840,9552,4441,1934,2389,8819,4811,67,2879,4360,9259,1798,9732,5176,5426,6238,3136,476,6214,3851,6926,8065,8967,9686,5664,4543,7860,5150,3046,5656,7591,9886,5208,2033,8172,3950,852,9335,4017,83,3695,3276,8234,9780,8453,3660,2370,7941]]


    const correctOutput = [49,1,16,2,56,770,48431514]
    let text="<br/>"
    for(let i=0; i<7;i++){
        const testInput= allTestInput[i]

        let result = maxArea(testInput)
        console.log(result)
        if(result == correctOutput[i]){
            text=text+("<h4>Result: "+result+"&emsp; &emsp; Correct result:"+correctOutput[i]+"&emsp;&emsp; therefore "+true+"</h4>")
        }
        else{
            text=text+("<h4>Result: "+result+"&emsp;&emsp; Correct result:"+correctOutput[i]+"&emsp;&emsp; therefore "+false+"</h4>")
        }


    }
    const area=document.getElementById("root")
    area.innerHTML = text
});
