// --- 關鍵步驟：已將您的 Web App 網址貼入此處 ---
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx6oMrHDy9bJ2s-NIrzb9GbW73oi7-zMuwgO02yxoqR0ig8euPnDMT45jO-oW0ioCtegQ/exec";
// ----------------------------------------------------------------------


// --- A. 您的所有投票選項資料都放在這裡 (歌單) ---
const votingSections = {
    'Chinese': {
        title: '一、中文歌曲投票 (最多選擇 5 首)',
        limit: 5,
        options: [
            // 85 首中文歌單
            { id: 'zh_1', name: '夏天的風', category: '元衛覺醒' },
            { id: 'zh_2', name: '三人遊', category: '方大同' },
            { id: 'zh_3', name: '愛愛愛', category: '方大同' },
            { id: 'zh_4', name: '紅豆', category: '王菲' },
            { id: 'zh_5', name: '小幸運', category: '田馥甄' },
            { id: 'zh_6', name: '寂寞寂寞就好', category: '田馥甄' },
            { id: 'zh_7', name: '白鴿', category: '伍佰' },
            { id: 'zh_8', name: '挪威的森林', category: '伍佰' },
            { id: 'zh_9', name: '浪人情歌', category: '伍佰' },
            { id: 'zh_10', name: '暮色迴響', category: '吉星出租' },
            { id: 'zh_11', name: '不是不滿足', category: '江蕙' },
            { id: 'zh_12', name: '我還年輕 我還年輕', category: '老王樂隊' },
            { id: 'zh_13', name: '披星戴月的想你', category: '告五人' },
            { id: 'zh_14', name: '董小姐', category: '宋冬野' },
            { id: 'zh_15', name: '山丘', category: '李宗盛' },
            { id: 'zh_16', name: '給自己的歌', category: '李宗盛' },
            { id: 'zh_17', name: '手放開', category: '李聖傑' },
            { id: 'zh_18', name: '痴心絕對', category: '李聖傑' },
            { id: 'zh_19', name: '喜劇之王', category: '李榮浩' },
            { id: 'zh_20', name: '有點甜', category: '汪蘇瀧 & BY2' },
            { id: 'zh_21', name: '不該', category: '周杰倫 feat. 張惠妹' },
            { id: 'zh_22', name: '不為誰而作的歌', category: '林俊傑' },
            { id: 'zh_23', name: '江南', category: '林俊傑' },
            { id: 'zh_24', name: '那些你很冒險的夢', category: '林俊傑' },
            { id: 'zh_25', name: '害怕', category: '林俊傑' },
            { id: 'zh_26', name: '浪費', category: '林宥嘉' },
            { id: 'zh_27', name: '兜圈', category: '林宥嘉' },
            { id: 'zh_28', name: '眼色', category: '林宥嘉' },
            { id: 'zh_29', name: '太陽', category: '邱振哲' },
            { id: 'zh_30', name: '天高地厚', category: '信樂團' },
            { id: 'zh_31', name: '下雨天', category: '南拳媽媽' },
            { id: 'zh_32', name: '男人KTV', category: '胡彥斌' },
            { id: 'zh_33', name: '那些年', category: '胡夏' },
            { id: 'zh_34', name: '浪流連', category: '茄子蛋' },
            { id: 'zh_35', name: '女孩', category: '韋禮安' },
            { id: 'zh_36', name: '因為愛', category: '韋禮安' },
            { id: 'zh_37', name: '在你身邊', category: '韋禮安' },
            { id: 'zh_38', name: '如果可以', category: '韋禮安' },
            { id: 'zh_39', name: '兩腳書櫥的逃亡', category: '韋禮安' },
            { id: 'zh_40', name: '慢慢等', category: '韋禮安' },
            { id: 'zh_41', name: '天黑黑', category: '孫燕姿' },
            { id: 'zh_42', name: '神奇', category: '孫燕姿' },
            { id: 'zh_43', name: '夜空中最亮的星', category: '逃跑計劃' },
            { id: 'zh_44', name: '月亮惹的禍', category: '張宇' },
            { id: 'zh_45', name: '曲終人散', category: '張宇' },
            { id: 'zh_46', name: '趁早', category: '張宇' },
            { id: 'zh_47', name: '口是心非', category: '張雨生' },
            { id: 'zh_48', name: '白月光', category: '張信哲' },
            { id: 'zh_49', name: '母系社會', category: '張惠妹' },
            { id: 'zh_50', name: '寂寞先生', category: '曹格' },
            { id: 'zh_51', name: '慢冷', category: '梁靜茹' },
            { id: 'zh_52', name: '如果沒有你', category: '莫文蔚' },
            { id: 'zh_53', name: '水星記', category: '郭頂' },
            { id: 'zh_54', name: '淒美地', category: '郭頂' },
            { id: 'zh_55', name: '孤獨患者', category: '陳奕迅' },
            { id: 'zh_56', name: '愛情轉移', category: '陳奕迅' },
            { id: 'zh_57', name: '奇妙能力歌', category: '陳粒' },
            { id: 'zh_58', name: '天后', category: '陳勢安' },
            { id: 'zh_59', name: '旅行的意義', category: '陳綺貞' },
            { id: 'zh_60', name: '沒那麼簡單', category: '黃小琥' },
            { id: 'zh_61', name: '飆高音', category: '黃明志' },
            { id: 'zh_62', name: '雨愛', category: '楊丞琳' },
            { id: 'zh_63', name: '殺死那個石家莊人', category: '萬能青年旅店' },
            { id: 'zh_64', name: '賊', category: '載佩妮' },
            { id: 'zh_65', name: '其實沒那麼寂寞', category: '廖文強' },
            { id: 'zh_66', name: '夜夜夜夜', category: '齊秦' },
            { id: 'zh_67', name: '玫瑰少年', category: '蔡依林' },
            { id: 'zh_68', name: '別找我麻煩', category: '蔡健雅' },
            { id: 'zh_69', name: '空白格', category: '蔡健雅' },
            { id: 'zh_70', name: '100種生活', category: '盧廣仲' },
            { id: 'zh_71', name: '幾分之幾', category: '盧廣仲' },
            { id: 'zh_72', name: '皮囊', category: '蕭敬騰' },
            { id: 'zh_73', name: '末班車', category: '蕭煌奇' },
            { id: 'zh_74', name: '於是長大了以後', category: '謝和弦' },
            { id: 'zh_75', name: '燈光', category: '謝震廷' },
            { id: 'zh_76', name: '左手指月', category: '薩頂頂' },
            { id: 'zh_77', name: '你啊你啊', category: '魏如萱' },
            { id: 'zh_78', name: '想你的夜', category: '關喆' },
            { id: 'zh_79', name: '不介意', category: '鶴 The Crane' },
            { id: 'zh_80', name: '有一種悲傷', category: 'A-Lin' },
            { id: 'zh_81', name: '跳樓機', category: 'LIB利比' },
            { id: 'zh_82', name: '雨季型戀人', category: 'Limi' },
            { id: 'zh_83', name: 'Sui 水', category: 'Limi,屠衡,雷擎' },
            { id: 'zh_84', name: '陌生人', category: 'Soler' },
            { id: 'zh_85', name: '獨上C樓', category: 'YELLOW黃宣' },
        ]
    },
    'Japanese': {
        title: '二、日文歌曲投票 (最多選擇 3 首)',
        limit: 3,
        options: [
            // 25 首日文歌單
            { id: 'jp_1', name: '天ノ弱', category: '164' },
            { id: 'jp_2', name: 'MIRA', category: '小春六花' },
            { id: 'jp_3', name: '僕が死のうと思ったのは', category: '中島美嘉' },
            { id: 'jp_4', name: '鬼丿宴', category: '友成空' },
            { id: 'jp_5', name: 'God Knows', category: '平野綾' },
            { id: 'jp_6', name: 'Lemon', category: '米津玄師' },
            { id: 'jp_7', name: '灰色と青', category: '米津玄師 • 菅田将暉' },
            { id: 'jp_8', name: 'ふわふわ時間', category: '放課後ティータイム' },
            { id: 'jp_9', name: 'まちがいさがし', category: '菅田将暉' },
            { id: 'jp_10', name: 'ドライフラワー', category: '優里' },
            { id: 'jp_11', name: '死ぬのがいいわ', category: '藤井風' },
            { id: 'jp_12', name: 'Bunny Girl', category: 'AKASAKI' },
            { id: 'jp_13', name: 'ソラニン', category: 'AKFG' },
            { id: 'jp_14', name: '今夜月の見える丘に', category: 'B\'z' },
            { id: 'jp_15', name: 'アニマル', category: 'Deco*27' },
            { id: 'jp_16', name: 'Wherever you are', category: 'One Ok Rock' },
            { id: 'jp_17', name: 'レイン', category: 'SID' },
            { id: 'jp_18', name: 'オレンジ', category: 'SPYAIR' },
            { id: 'jp_19', name: 'unravel', category: 'TK from 凛として時雨' },
            { id: 'jp_20', name: '晚餐歌', category: 'tuki.' },
            { id: 'jp_21', name: '怪獣の花唄', category: 'Vaundy' },
            { id: 'jp_22', name: '世界が終わるまでは', category: 'WANDS' },
            { id: 'jp_23', name: 'はいよろこんで', category: 'こっちのけんと' },
            { id: 'jp_24', name: 'にゃんにゃんにゃん', category: 'コレサワ' },
            { id: 'jp_25', name: 'フォニイ', category: 'ツミキ feat. kafu' },
        ]
    },
    'English': {
        title: '三、英文歌曲投票 (最多選擇 5 首)',
        limit: 5,
        options: [
            // 67 首英文歌單
            { id: 'en_1', name: 'Singalongsong', category: '方大同' },
            { id: 'en_2', name: 'No Boundaries', category: 'Adam Lambert' },
            { id: 'en_3', name: 'Whataya Want From Me', category: 'Adam Lambert' },
            { id: 'en_4', name: 'Lost Stars', category: 'Adam Levine' },
            { id: 'en_5', name: 'Hello', category: 'Adele' },
            { id: 'en_6', name: 'Someone Like You', category: 'Adele' },
            { id: 'en_7', name: 'Legends Never Die', category: 'Against The Current' },
            { id: 'en_8', name: 'If I Ain\'t Got You', category: 'Alicia Keys' },
            { id: 'en_9', name: 'Grenade', category: 'Bruno Mars' },
            { id: 'en_10', name: 'Just the way you are', category: 'Bruno Mars' },
            { id: 'en_11', name: 'The Lazy Song', category: 'Bruno Mars' },
            { id: 'en_12', name: 'When I Was Your Man', category: 'Bruno Mars' },
            { id: 'en_13', name: 'Phoenix', category: 'Cailin Russo, Chrissy Costanza' },
            { id: 'en_14', name: 'You Are The Reason', category: 'Calum Scott' },
            { id: 'en_15', name: 'Dancing On My Own', category: 'Calum Scott' },
            { id: 'en_16', name: 'Close to you', category: 'Carpenters' },
            { id: 'en_17', name: 'A Thousand Years', category: 'Christina Perri' },
            { id: 'en_18', name: 'Can\'t Help Falling In Love', category: 'Crazy Rich Asians' },
            { id: 'en_19', name: 'Best Part', category: 'Daniel Caesar ft. H.E.R' },
            { id: 'en_20', name: 'Bad Day', category: 'Daniel Powter' },
            { id: 'en_21', name: 'It\'s Not Over', category: 'Daughtry' },
            { id: 'en_22', name: 'Over You', category: 'Daughtry' },
            { id: 'en_23', name: 'Cake By The Ocean', category: 'DNCE' },
            { id: 'en_24', name: '9 to 5', category: 'Dolly Parton' },
            { id: 'en_25', name: 'Don\'t', category: 'Ed Sheeran' },
            { id: 'en_26', name: 'Perfect', category: 'Ed Sheeran' },
            { id: 'en_27', name: 'Photograph', category: 'Ed Sheeran' },
            { id: 'en_28', name: 'Shape Of You', category: 'Ed Sheeran' },
            { id: 'en_29', name: 'The A Team', category: 'Ed Sheeran' },
            { id: 'en_30', name: 'Fly Me to the Moon', category: 'Frank Sinatra' },
            { id: 'en_31', name: 'Careless Whisper', category: 'George Michael' },
            { id: 'en_32', name: 'Watermelon Sugar', category: 'Harry Styles' },
            { id: 'en_33', name: 'Golden', category: 'HUNTR/X' },
            { id: 'en_34', name: 'Warriors', category: 'Imagine Dragons' },
            { id: 'en_35', name: 'Believer', category: 'Imagine Dragons x J.I.D' },
            { id: 'en_36', name: 'Enemy', category: 'Imagine Dragons x J.I.D' },
            { id: 'en_37', name: 'Scars', category: 'James Bay' },
            { id: 'en_38', name: 'You\'re Beautiful', category: 'James Blunt' },
            { id: 'en_39', name: 'I Won’t Give Up', category: 'Jason Mraz' },
            { id: 'en_40', name: 'I’m Yours', category: 'Jason Mraz' },
            { id: 'en_41', name: 'comethru', category: 'Jeremy Zucker' },
            { id: 'en_42', name: 'All of Me', category: 'John Legend' },
            { id: 'en_43', name: 'beside you', category: 'keshi' },
            { id: 'en_44', name: 'Drunk', category: 'keshi' },
            { id: 'en_45', name: 'Die with a smile', category: 'Lady Gaga, Bruno Mars' },
            { id: 'en_46', name: 'Malibu Nights', category: 'LANY' },
            { id: 'en_47', name: 'Someone You Love', category: 'Lewis Capaldi' },
            { id: 'en_48', name: 'In The End', category: 'Linkin Park' },
            { id: 'en_49', name: '7 Years', category: 'Lukas Graham' },
            { id: 'en_50', name: 'Maps', category: 'Maroon 5' },
            { id: 'en_51', name: 'She Will Be Loved', category: 'Maroon 5' },
            { id: 'en_52', name: 'Sugar', category: 'Maroon 5' },
            { id: 'en_53', name: 'Speechless', category: 'Naomi Scott' },
            { id: 'en_54', name: 'L-O-V-E', category: 'Nat King Cole' },
            { id: 'en_55', name: 'GODS', category: 'NewJeans' },
            { id: 'en_56', name: 'We Are', category: 'One Ok Rock' },
            { id: 'en_57', name: 'Heartache', category: 'One Ok Rock' },
            { id: 'en_58', name: 'Apologize', category: 'OneRepublic' },
            { id: 'en_59', name: 'Made for You', category: 'OneRepublic' },
            { id: 'en_60', name: 'Counting star', category: 'OneRepublic' },
            { id: 'en_61', name: 'Burn It All Down', category: 'PVRIS' },
            { id: 'en_62', name: 'You\'ve Got a Friend in Me', category: 'Randy Newman' },
            { id: 'en_63', name: 'The Best Day', category: 'Taylor Swift' },
            { id: 'en_64', name: 'Lose Control', category: 'Teddy Swims' },
            { id: 'en_65', name: 'Hey, Soul Sister', category: 'Train' },
            { id: 'en_66', name: 'rewrite the stars', category: 'Zac Efron & Zendaya' },
            { id: 'en_67', name: 'ignite', category: 'Zedd' },
        ]
    },
    'Taiwanese': {
        title: '四、台語歌曲投票 (最多選擇 3 首)',
        limit: 3,
        options: [
            // 10 首台語歌單
            { id: 'tw_1', name: '家後', category: '江蕙' },
            { id: 'tw_2', name: '落雨聲', category: '江蕙' },
            { id: 'tw_3', name: '拌拌咧', category: '李竺芯' },
            { id: 'tw_4', name: '再會啦！心愛的無緣的人', category: '施文彬' },
            { id: 'tw_5', name: '浪子回頭', category: '茄子蛋' },
            { id: 'tw_6', name: '鼓聲若響', category: '新寶島康樂隊' },
            { id: 'tw_7', name: '魚仔', category: '盧廣仲' },
            { id: 'tw_8', name: '阿嬤的話', category: '蕭煌奇' },
            { id: 'tw_9', name: '追追追', category: '蘇打綠' },
            { id: 'tw_10', name: '無眠', category: '蘇打綠' },
        ]
    }
};

// 紀錄使用者已選擇的選項
const selectedVotes = {
    Chinese: new Set(),
    Japanese: new Set(),
    English: new Set(),
    Taiwanese: new Set(),
};


// 動態渲染所有投票區塊 (程式碼與前次一致)
function renderVotingSections() {
    const mainContainer = document.getElementById('votingApp');
    mainContainer.innerHTML = ''; 
    
    Object.keys(votingSections).forEach(sectionKey => {
        const sectionData = votingSections[sectionKey];
        const sectionElement = document.createElement('section');
        sectionElement.className = 'voting-section';
        
        sectionElement.innerHTML = `
            <h2>${sectionData.title} <span class="count-display" id="count_${sectionKey}"> (已選 0 首)</span></h2>
            <div class="options-grid" id="options_${sectionKey}">
                </div>
        `;
        mainContainer.appendChild(sectionElement);

        const optionsGrid = document.getElementById(`options_${sectionKey}`);
        sectionData.options.forEach(item => {
            const card = document.createElement('div');
            card.className = 'option-card';
            card.setAttribute('data-id', item.id);
            card.setAttribute('data-section', sectionKey);
            card.setAttribute('onclick', `handleVote('${sectionKey}', '${item.id}', this)`);

            card.innerHTML = `
                <h4>${item.name}</h4>
                <p>${item.category}</p>
            `;
            optionsGrid.appendChild(card);
        });
    });

    const textSection = document.createElement('section');
    textSection.className = 'text-area-section';
    textSection.innerHTML = `
        <h2>五、最喜歡的一首歌是什麼？為什麼？ (無語言限制)</h2>
        <textarea id="favoriteSongText" rows="6" placeholder="請在此輸入歌名與原因..."></textarea>
    `;
    mainContainer.appendChild(textSection);

    const submitBtn = document.createElement('button');
    submitBtn.textContent = '提交您的投票與心願';
    submitBtn.className = 'submit-button';
    submitBtn.setAttribute('onclick', 'collectResults()');
    mainContainer.appendChild(submitBtn);
}


// 處理多選和數量限制 (程式碼與前次一致)
function handleVote(sectionKey, optionId, cardElement) {
    const section = votingSections[sectionKey];
    const votes = selectedVotes[sectionKey];
    
    if (votes.has(optionId)) {
        votes.delete(optionId);
        cardElement.classList.remove('selected');
    } else {
        if (votes.size >= section.limit) {
            alert(`在【${section.title.split('(')[0]}】中，您最多只能選擇 ${section.limit} 首歌曲。`);
            return; 
        }
        
        votes.add(optionId);
        cardElement.classList.add('selected');
    }
    
    updateSelectionCount(sectionKey);
}

// 更新區塊的已選數量顯示 (程式碼與前次一致)
function updateSelectionCount(sectionKey) {
    const countDisplay = document.getElementById(`count_${sectionKey}`);
    const currentCount = selectedVotes[sectionKey].size;
    countDisplay.textContent = ` (已選 ${currentCount} 首)`;
}


// 核心函數：使用 fetch() 進行隱形數據傳輸到 Apps Script
function collectResults() {
    
    // 1. 整理四個語系區塊的選擇結果，轉換成逗號分隔的字串
    const dataToSend = {
        // 歌名和歌手資訊用分號分隔，方便 Sheets 閱讀
        ChineseVotes: Array.from(selectedVotes.Chinese).map(id => {
            const opt = votingSections.Chinese.options.find(o => o.id === id);
            return `${opt.name} (${opt.category})`;
        }).join('; '),
        
        JapaneseVotes: Array.from(selectedVotes.Japanese).map(id => {
            const opt = votingSections.Japanese.options.find(o => o.id === id);
            return `${opt.name} (${opt.category})`;
        }).join('; '),
        
        EnglishVotes: Array.from(selectedVotes.English).map(id => {
            const opt = votingSections.English.options.find(o => o.id === id);
            return `${opt.name} (${opt.category})`;
        }).join('; '),
        
        TaiwaneseVotes: Array.from(selectedVotes.Taiwanese).map(id => {
            const opt = votingSections.Taiwanese.options.find(o => o.id === id);
            return `${opt.name} (${opt.category})`;
        }).join('; '),

        // 2. 整理文字輸入區塊
        FavoriteText: document.getElementById('favoriteSongText').value.trim()
    };
    
    // 檢查是否有任何選擇
    const hasSelection = Object.values(dataToSend).some(val => val.length > 0);
    if (!hasSelection) {
         alert("請至少選擇一首歌曲或輸入心願！");
         return;
    }
    
    // 提交前鎖定按鈕，防止重複點擊
    const submitBtn = document.querySelector('.submit-button');
    submitBtn.disabled = true;
    submitBtn.textContent = '提交中...請稍候';

    // 3. 執行隱形傳輸 (Fetch API)
    fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        body: new URLSearchParams(dataToSend) 
    })
    .then(response => response.json())
    .then(data => {
        submitBtn.disabled = false;
        submitBtn.textContent = '提交您的投票與心願'; 

        if (data.result === "success") {
            alert("✅ 感謝您的投票！數據已成功提交。");
            window.location.reload(); 
        } else {
            alert("❌ 投票提交失敗。請聯繫管理員。錯誤訊息: " + data.message);
        }
    })
    .catch(error => {
        submitBtn.disabled = false;
        submitBtn.textContent = '提交您的投票與心願';
        alert("❌ 連線錯誤，請檢查您的網路並重試。");
    });
}

// 頁面載入完成後，執行渲染
document.addEventListener('DOMContentLoaded', () => {
    renderVotingSections();
});