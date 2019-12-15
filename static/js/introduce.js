var godName = {
    nordic: [
        "奧丁", "弗麗嘉", "索爾", "希芙", "洛基",
        "巴德爾", "霍德爾", "凡賽堤", "布拉基",
        "伊登", "尼約德弗雷弗蕾亞", "提爾", "海姆達爾"
    ],
    china: [

    ],
    egypt: [
        "拉", "舒", "泰芙努特", "蓋布",
        "努特", "歐西里斯", "伊西絲",
        "賽特", "奈芙蒂斯"
    ],
    greece: [
        "宙斯", "赫拉", "波賽頓", "狄蜜特", "雅典娜",
        "阿波羅", "阿蒂蜜絲", "羅黛蒂", "阿瑞斯", "赫菲斯托斯",
        "荷米斯", "荷絲提雅"
    ],
    india: [
        "梵天", "毗濕奴", "濕婆"
    ]
};

var slicePath = {
    nordic: [

    ],
    china: [

    ],
    egypt: [
        "ra_slice.png", "shu_slice.png", "tefnut_slice.png",
        "geb_slice.png", "nut_slice.png", "osiris_slice.png",
        "isis_slice.png", "seth_slice.png", "nephthys_slice.png"
    ],
    greece: [
        "zeus_slice.png", "hera_slice.png", "poseidon_slice.png",
        "demeter_slice.png", "athena_slice.png", "apollo_slice.png",
        "artemis_slice.png", "aphrodite_slice.png", "ares_slice.png",
        "hephaestus_slice.png", "hermes_slice.png", "hestia_slice.png"
    ],
    india: [
        "siva_slice.png", "brahma_slice.png", "siva_slice.png"
    ]
};




function getList(name) {
    $("#list").empty();
    for (var i = 0; i < godName[name].length; i++) {
        $("#list").prepend(
            `<div class="slice_wrap">
                <img src="static/image/${name}/${slicePath[name][i]}">
                <div class="slice_name">
                    <div class="slice_name_text">${godName[name][i]}</div>
                </div>
            </div>`
        );

    }
}