<template>
  <div id="form">
    <div id="pos0" @click="toTop()">
    <my-header fixed title="国际交流意向调查" class="my_header" ></my-header>
    </div>
    <div class="form_questions">
    <div class="question" id="pos1">
    <p class="title">1. 请问你毕业后的计划是什么？</p>
    <my-radio
    :value.sync="Q1"
    :options="['出国留学', '国内考研', '工作', '创业', '还不确定']" >
    </my-radio>
    </div>
    <div class="question" id="pos2">
    <p class="title">2. 现代社会对国际化人才的要求越来越高，你计划如何发展自己以符合社会要求？</p>
    <my-radio
    :value.sync="Q2"
    :options="['学好外语', '本科期间找机会出国交流', '和外国人多交流', '本科期间不出国，直接出国读研究生', '没想过']">
    </my-radio>
    </div>
    <div class="question" id="pos3">
    <p class="title">3. 关于在校期间出国学习或交流的计划，你的想法是：</p>
    <my-radio
    :value.sync="Q3"
    :options="Q3_Options">
    </my-radio>
    </div>
    <div class="question" id="pos4">
      <p class="title">4. 在校期间，你是否已经参加过学校的出国交流项目？</p>
      <my-radio
    :value.sync="Q4"
    :options="Q4_Options">
    </my-radio>
    </div>
    <div class="question" id="pos5" v-if="isFourYes">
      <p class="title">5. 请选填你已经参加过的项目类型和国家（可多选）：</p>
      <my-radio
      :value.sync="Q5_1"
      :options="['免费公派交换生项目，前往国家或地区']" class="fill">
      </my-radio>
      <my-field type="text" :value.sync="Q5_1A" label="&nbsp国家/地区:" placeholder="请填写国家或地区"></my-field>
      <my-radio
      :value.sync="Q5_2"
      :options="['自费学分类课程（即专业课程），前往国家或地区']" class="fill" >
      </my-radio>
      <my-field type="text" :value.sync="Q5_2A" label="&nbsp国家/地区:" placeholder="请填写国家或地区"></my-field>
      <my-radio
      :value.sync="Q5_3"
      :options="['自费语言或暑期文化类课程，前往国家或地区']" class="fill">
      </my-radio>
      <my-field type="text" :value.sync="Q5_3A" label="&nbsp国家/地区:" placeholder="请填写国家或地区"></my-field>
      <my-radio
      :value.sync="Q5_4"
      :options="['带薪实习项目']" class="fill">
      </my-radio>
      <my-radio
      :value.sync="Q5_5"
      :options="['其他项目']" class="fill">
      </my-radio>
      <my-field type="text" :value.sync="Q5_5A" label="&nbsp国家/地区:" placeholder="请填写国家或地区"></my-field>
    </div>
    <div class="question" id="pos6" v-if="isFourYes">
      <p class="title">6. 你在校期间还准备参加其它出国交流项目吗？</p>
      <my-radio
    :value.sync="Q6"
    :options="['是', '否']">
    </my-radio>
    </div>
    <div class="question" id="pos7">
      <p class="title">7. 请问你出国交流学习的目的？（请按重要顺序依次选出前三项）</p>
      <p class="letters">1.{{Q7_1letter}}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2.{{Q7_2letter}}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp3.{{Q7_3letter}}</p>
      <my-checklist
      :value.sync="Q7_Array"
       :max="maxNum"
      :options="Q7_Options">
    </my-checklist>
    </div>
    <div class="question" id="pos8">
      <p class="title">8. 你认为国外学习的经历对大学生有哪些好处？（多选题，最多选3项）</p>
      <my-checklist
      :value.sync="Q8_Array"
      :max="maxNum"
      :options="['水平高：接受更先进的教育，使自己在未来更具竞争力', '选择多：国外大学专业开设更广，可以学自己感兴趣的专业', '更自由：自由开放的讨论风气和教学环境', '受锻炼：开拓眼界，磨练、提升自己各方面能力', '学语言：语言环境好，可以更好的提高外语水平', '镀金：出国的人越来越多，有一段国外学习经历不吃亏']">
    </my-checklist>
    </div>
    <div class="question" id="pos9">
      <p class="title">9. 如果有机会出国学习或交流，你会考虑以下哪三个国家或地区（仅需选三个）？</p>
      <my-checklist
      :value.sync="Q9_Array"
       :max="maxNum"
      :options="['美国', '英国', '欧洲', '亚洲', '加拿大', '澳大利亚', '哪个国家都行', '其他']" >
    </my-checklist>
    </div>
    <div class="question" id="pos10">
    <p class="title">10. 如果有机会出国学习或交流，你会如何选择国外大学和项目内容？（请按重要顺序依次选出前三项）</p>
      <p class="letters">1.{{Q10_1letter}}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2.{{Q10_2letter}}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp3.{{Q10_3letter}}</p>
      <my-checklist
      :value.sync="Q10_Array"
       :max="maxNum"
      :options="Q10_Options">
    </my-checklist>
    </div>
    <div class="question" id="pos11">
      <p class="title">11. 关于在校期间出国学习或交流的时间，你会选择：（最多选3项）</p>
      <my-checklist
      :value.sync="Q11_Array"
      :max="maxNum"
      :options="['一学期或一学年', '1-2个月', '2-3周', '越长越好', '学期中间', '寒暑假', '什么时间都行，只要学校允许']" >
    </my-checklist>
    </div>
    <div class="question" id="pos12">
      <p class="title">12. 关于在校期间出国学习或交流，你认为自己可以承受的费用范围是：</p>
       <my-radio
    :value.sync="Q12"
    :options="['5万以下', '5万到10万之间', '10万到20万之间', '20万以上']" >
    </my-radio>
    </div>
    <div class="question" id="pos13">
      <p class="title">13. 对于参加项目与否，会影响你的决定的因素有哪些？（请按重要程度选出前三项）</p>
      <p class="letters">1.{{Q13_1letter}}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2.{{Q13_2letter}}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp3.{{Q13_3letter}}</p>
      <my-checklist
      :value.sync="Q13_Array"
       :max="maxNum"
      :options="Q13_Options">
    </my-checklist>
    </div>
    <div class="question" id="pos14">
      <p class="title">14．对于在校期间参加出国交流项目，你的顾虑是什么？（最多选三项）</p>
      <my-checklist
      :value.sync="Q14_Array"
      :max="maxNum"
      :options="['要求太高，担心自己达不到', '费用太高，怕家里无法负担', '国内学业受影响', '对未来发展帮助不大', '担心生活习惯不适应或怕国外不安全', '影响考研、评优或找工作']" >
    </my-checklist>
    </div>
    <div class="question" id="pos15">
      <p class="title">15. 关于出国学习或交流，你父母的态度是：</p>
      <my-radio
    :value.sync="Q15"
    :options="['非常支持', '只要我自己决定了，父母应该会支持', '父母希望我出国，我自己意愿不是很强烈', '需要和父母商量，还不确定是否支持']" >
    </my-radio>
    </div>
    <div class="question" id="pos16">
      <p class="title">16. 你是否关注学校发布的出国学习或交流的信息：</p>
      <my-radio
    :value.sync="Q16"
    :options="['非常关注，经常在学校网站等平台寻找相关信息', '一般关注，如果偶然遇到相关信息或海报，会看一下具体内容', '除非院系老师通知，否则不会关注', '不知道在哪里可以找到这些信息', '不关注学校信息，通常会在校外找相关的项目']" >
    </my-radio>
    </div>
    <div class="question" id="pos17">
      <p class="title">17.对于海外学习项目的宣传（请按接受程度的高低选出前三项）</p>
      <p class="letters">1.{{Q17_1letter}}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2.{{Q17_2letter}}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp3.{{Q17_3letter}}</p>
      <my-checklist
      :value.sync="Q17_Array"
       :max="maxNum"
      :options="Q17_Options">
    </my-checklist>
    </div>
    <div class="question" id="pos18">
      <p class="title">18. 关于学校组织的各种出国学习与交流的项目，你的感觉是：</p>
      <my-radio
    :value.sync="Q18"
    :options="['项目太多，不知道该如何选择', '学校项目挺好的，符合我的需要', '学校的项目没有适合我的', '学校公布这些项目信息的渠道少或内容简单，不够吸引人']" >
    </my-radio>
    </div>
    <div class="question" id="pos19">
      <p class="title">19. 你最关注或信任的全球大学排行榜是：</p>
      <my-radio
    :value.sync="Q19"
    :options="Q19_Options" >
    </my-radio>
    </div>
    <div class="question" id="pos20">
    <p class="title" >20. 对我校国际化建设的建议与意见：</p>
    <my-field type="textarea" :value.sync="Q20" rows="6" placeholder="请填写意见和建议"></my-field>
    </div>
    </div>
    <div class="form_person">
    <p class="info">答卷人信息</p>
    <div class="person_info" id="pos21">
      <my-field type="text" label="姓名:" :value.sync="name" placeholder="请填写姓名"></my-field>
    </div>
    <div class="person_info" id="pos22">
      <my-radio
      :value.sync="sex"
      :options="['男', '女']"
      class="sex"
      >
      </my-radio>
    </div>
    <div class="person_info" id="pos23">
      <my-field type="text" label="学号:" :value.sync="study_num" placeholder="请填写学号"></my-field>
    </div>
    <div class="person_info" id="pos24">
      <my-field type="tel" state="tel_state" label="手机:" :value.sync="tel" placeholder="请填写手机"></my-field>
    </div>
    <div class="person_info" id="pos25">
      <my-field type="email" :state="email_state" label="邮箱:" :value.sync="email" placeholder="请填写邮箱"></my-field>
    </div>
    <div class="person_info" id="pos26" >
      <my-picker :slots="gradeSlot" @change="onGradeChange" :visible-item-count="3" class="picker"></my-picker>
      <p class="picker_label">年级:&nbsp&nbsp&nbsp&nbsp{{ grade }}</p>
    </div>
    <div class="person_info" id="pos27">
      <my-picker :slots="majorSlots" @change="onMajorChange" :visible-item-count="5" class="picker"></my-picker>
      <p class="picker_label">学院:&nbsp&nbsp&nbsp&nbsp{{ academy }}</p>
      <p class="picker_label">专业:&nbsp&nbsp&nbsp&nbsp{{ profess }}</p>
    </div>
    </div>
    <my-button type="primary" size="large" class="btn_submit" @click="submit">确认提交</my-button>
    </div>
    <my-popup
    :visible.sync="popupVisible"
    pop-transition="popup-fade"
    class="mint-popup-1" :style="{ top: buttonBottom + 10 + 'px' }">{{wanning}}
    </my-popup>
    <my-popup
    :visible.sync="popupVisible1"
    position="bottom"
    class="mint-popup-4"
    >{{thanks}}
    </my-popup>

</template>
<script>
import { Header, Field, Cell, Picker, Radio, Checklist, Button, Popup} from 'mint-ui'
export default {
  components: {
    'my-header': Header,
    'my-field': Field,
    'my-cell': Cell,
    'my-picker': Picker,
    'my-radio': Radio,
    'my-checklist': Checklist,
    'my-button': Button,
    'my-popup': Popup
  },
  data() {
    return {
        Q1: '',
        Q2: '',
        Q3: '',
        Q4: '',
        Q5_1: '',
        Q5_2: '',
        Q5_3: '',
        Q5_4: '',
        Q5_5: '',
        Q5_1A: '',
        Q5_2A: '',
        Q5_3A: '',
        Q5_5A: '',
        Q6: '',
        Q7_Array: [],
        Q8_Array: [],
        Q9_Array: [],
        Q10_Array: [],
        Q11_Array: [],
        Q12: '',
        Q13_Array: [],
        Q14_Array: [],
        Q15: '',
        Q16: '',
        Q17_Array: [],
        Q18: '',
        Q19: '',
        Q20: '',
        Q3_Options: [
        {
          label: '大学期间一定要出国学习一次，为未来留学、考研、工作等做准备，更具竞争力',
          value: '大学期间一定要出国学习一次，为未来留学、考研、工作等做准备，更具竞争力'
        },
        {
          label: '不确定，要根据自身情况和项目内容决定',
          value: '不确定，要根据自身情况和项目内容决定'
        },
        {
          label: '反正毕业后要出国，大学期间就不出去了',
          value: '反正毕业后要出国，大学期间就不出去了'
        },
        {
          label: '没想过',
          value: '没想过1'
        }
        ],
        Q4_Options: [
        {
          label: '是（请跳转到下一题）',
          value: '是'
        },
        {
          label: '否（请跳转到第7题）',
          value: '否'
        }],
        Q7_Options: [
        {
          label: 'A. 为以后申请国外研究生打好基础',
          value: '为以后申请国外研究生打好基础'
        },
        {
          label: 'B. 提高英文水平，开拓视野',
          value: '提高英文水平，开拓视野'
        },
        {
          label: 'C. 提高就业竞争力',
          value: '提高就业竞争力'
        },
        {
          label: 'D. 出国工作',
          value: '出国工作'
        },
        {
          label: 'E. 想体验国外大学不同的教学体系',
          value: '想体验国外大学不同的教学体系'
        }
        ],
        Q10_Options: [
        {
          label: 'A. 学校排名越高越好',
          value: '学校排名越高越好'
        },
        {
          label: 'B. 学校所在国家/地区经济发达',
          value: '学校所在国家/地区经济发达'
        },
        {
          label: 'C. 学校周边有著名景点，环境优美',
          value: '学校周边有著名景点，环境优美'
        },
        {
          label: 'D. 学校所在国家/地区安全',
          value: '学校所在国家/地区安全',
        },
        {
          label: 'E. 可以和当地学生一起上课',
          value: '可以和当地学生一起上课'
        }
        ,
        {
          label: 'F. 可以和其他国际学生在一起',
          value: '可以和其他国际学生在一起'
        },
        {
          label: 'G. 可以住在当地人家庭里',
          value: '可以住在当地人家庭里'
        },
        {
          label: 'H. 有同行的中国学生可以做伴',
          value: '有同行的中国学生可以做伴'
        },
        {
          label: 'I. 可以大幅提高英语水平',
          value: '可以大幅提高英语水平'
        },
        {
          label: 'J. 可以学习专业课内容，和大学教授有交流',
          value: '可以学习专业课内容，和大学教授有交流'
        }
        ,
        {
          label: 'K. 可以去很多景点，可以购物',
          value: '可以去很多景点，可以购物'
        },
        {
          label: 'L. 只要能拿到国外的学位，其他都不重要',
          value: '只要能拿到国外的学位，其他都不重要'
        }
        ],
        Q13_Options: [
        {
          label: 'A. 选课难易程度',
          value: '选课难易程度'
        },
        {
          label: 'B. 学分转换政策',
          value: '学分转换政策'
        },
        {
          label: 'C. 教授是否同意',
          value: '教授是否同意'
        },
        {
          label: 'D. 学院是否支持',
          value: '学院是否支持'
        },
        {
          label: 'E. 是否有证书或者拿学位',
          value: '是否有证书或者拿学位'
        },
        {
          label: 'F. 往期学生反馈的口碑',
          value: '往期学生反馈的口碑'
        },
        {
          label: 'G. 能否获得学校的资金支持',
          value: '能否获得学校的资金支持'
        }
        ],
        Q17_Options: [
        {
          label: 'A. 学校范围的宣讲会',
          value: '学校范围的宣讲会'
        },
        {
          label: 'B. 微信',
          value: '微信'
        },
        {
          label: 'C. 有出国经历同学的分享',
          value: '有出国经历同学的分享'
        },
        {
          label: 'D. 学校官网',
          value: '学校官网'
        },
        {
          label: 'E. 院系组织的专场宣讲会',
          value: '院系组织的专场宣讲会'
        }
        ],
        Q19_Options: [
        {
          label: '美国US News and World Report',
          value: '美国US News and World Report'
        },
        {
          label: '上海交通大学世界大学学术排名ARWU',
          value: '上海交通大学世界大学学术排名ARWU'
        },
        {
          label: '英国泰晤士报世界大学排名Times',
          value: '英国泰晤士报世界大学排名Times'
        },
        {
          label: '没有关注过任何大学排名',
          value: '没有关注过任何大学排名'
        },
        {
          label: '其他',
          value: '其他1'
        }
        ],
        maxNum: 3,

        name: '',
        sex: '',
        study_num: '',
        tel: '',
        email: '',
        majorSlots: [
          {
            flex: 1,
            values: Object.keys(major),
            className: 'slot1',
            textAlign: 'center'
          }, {
            divider: true,
            content: '--',
            className: 'slot2'
          }, {
            flex: 1,
            values: ['法学'],
            className: 'slot3',
            textAlign: 'center'
          }
        ],
        gradeSlot: [
          {
            flex: 1,
            values: ['大一', '大二', '大三', '大四', '研一', '研二', '研三'],
            className: 'slot1'
          }
        ],
        academy: '法学院',
        profess: '法学',
        grade: '大一',
        wanning: '',
        thanks: '',
        popupVisible: false,
        popupVisible1: false
    }
  },
  computed: {
    isFourYes: function() {
      if (this.Q4==='否') {
        return false
      }
      return true
    },
    Q7_1letter: function() {
      return this.getQ7_letters(0)
    },
    Q7_2letter: function() {
      return this.getQ7_letters(1)
    },
    Q7_3letter: function() {
      return this.getQ7_letters(2)
    },
    Q10_1letter: function() {
      return this.getQ10_letters(0)
    },
    Q10_2letter: function() {
      return this.getQ10_letters(1)
    },
    Q10_3letter: function() {
      return this.getQ10_letters(2)
    },
    Q13_1letter: function() {
      return this.getQ13_letters(0)
    },
    Q13_2letter: function() {
      return this.getQ13_letters(1)
    },
    Q13_3letter: function() {
      return this.getQ13_letters(2)
    },
    Q17_1letter: function() {
      return this.getQ17_letters(0)
    },
    Q17_2letter: function() {
      return this.getQ17_letters(1)
    },
    Q17_3letter: function() {
      return this.getQ17_letters(2)
    }
  },
  methods: {
      getQ7_letters(index) {
      if (this.Q7_Array[index]==='为以后申请国外研究生打好基础') {
        return 'A'
      }
      if (this.Q7_Array[index]==='提高英文水平，开拓视野') {
        return 'B'
      }
      if (this.Q7_Array[index]==='提高就业竞争力') {
        return 'C'
      }
      if (this.Q7_Array[index]==='出国工作') {
        return 'D'
      }
      if (this.Q7_Array[index]==='想体验国外大学不同的教学体系') {
        return 'E'
      }
      return ''
      },
      getQ10_letters(index) {
      if (this.Q10_Array[index]==='学校排名越高越好') {
        return 'A'
      }
      if (this.Q10_Array[index]==='学校所在国家/地区经济发达') {
        return 'B'
      }
      if (this.Q10_Array[index]==='学校周边有著名景点，环境优美') {
        return 'C'
      }
      if (this.Q10_Array[index]==='学校所在国家/地区安全') {
        return 'D'
      }
      if (this.Q10_Array[index]==='可以和当地学生一起上课') {
        return 'E'
      }
      if (this.Q10_Array[index]==='可以和其他国际学生在一起') {
        return 'F'
      }
      if (this.Q10_Array[index]==='可以住在当地人家庭里') {
        return 'G'
      }
      if (this.Q10_Array[index]==='有同行的中国学生可以做伴') {
        return 'H'
      }
      if (this.Q10_Array[index]==='可以大幅提高英语水平') {
        return 'I'
      }
      if (this.Q10_Array[index]==='可以学习专业课内容，和大学教授有交流') {
        return 'J'
      }
      if (this.Q10_Array[index]==='可以去很多景点，可以购物') {
        return 'K'
      }
      if (this.Q10_Array[index]==='只要能拿到国外的学位，其他都不重要') {
        return 'L'
      }
      return ''
      },
      getQ13_letters(index) {
      if (this.Q13_Array[index]==='选课难易程度') {
        return 'A'
      }
      if (this.Q13_Array[index]==='学分转换政策') {
        return 'B'
      }
      if (this.Q13_Array[index]==='教授是否同意') {
        return 'C'
      }
      if (this.Q13_Array[index]==='学院是否支持') {
        return 'D'
      }
      if (this.Q13_Array[index]==='是否有证书或者拿学位') {
        return 'E'
      }
      if (this.Q13_Array[index]==='往期学生反馈的口碑') {
        return 'F'
      }
      if (this.Q13_Array[index]==='能否获得学校的资金支持') {
        return 'G'
      }
      return ''
      },
      getQ17_letters(index) {
      if (this.Q17_Array[index]==='学校范围的宣讲会') {
        return 'A'
      }
      if (this.Q17_Array[index]==='微信') {
        return 'B'
      }
      if (this.Q17_Array[index]==='有出国经历同学的分享') {
        return 'C'
      }
      if (this.Q17_Array[index]==='学校官网') {
        return 'D'
      }
      if (this.Q17_Array[index]==='院系组织的专场宣讲会') {
        return 'E'
      }
      return ''
      },
      onMajorChange(picker, values) {
        picker.setSlotValues(1, major[values[0]])
        this.academy = values[0]
        this.profess = values[1]
      },
      onGradeChange(picker, values) {
        this.grade = values[0]
      },
      submit() {
        if(this.Q1==='') {
          this.someNull('pos1')
          return null
        }
        if(this.Q2==='') {
          this.someNull('pos2')
          return null
        }
        if(this.Q3==='') {
          this.someNull('pos3')
          return null
        }
        if(this.Q4==='') {
          this.someNull('pos4')
          return null
        }
        if(this.Q4==='是' && this.Q5_1==='' &&this.Q5_2==='' &&this.Q5_3==='' &&this.Q5_4==='' &&this.Q5_5==='') {
          this.someNull('pos5')
          return null
        }
        if(this.Q4==='是'&&this.Q6==='') {
          this.someNull('pos6')
          return null
        }
        if (this.Q4==='否') {
          this.Q5_1 = ''
          this.Q5_1A = ''
          this.Q5_2= ''
          this.Q5_2A = ''
          this.Q5_3 = ''
          this.Q5_3A = ''
          this.Q5_4 = ''
          this.Q5_5 = ''
          this.Q5_5A = ''
          this.Q6=''
        }
        if (this.Q5_1==='') {
          this.Q5_1A = ''
        }
        if (this.Q5_2==='') {
          this.Q5_2A = ''
        }
        if (this.Q5_3==='') {
          this.Q5_3A = ''
        }
        if (this.Q5_5==='') {
          this.Q5_5A = ''
        }
        if(this.Q7_1letter===''||this.Q7_2letter===''||this.Q7_3letter==='') {
          this.someNull('pos7')
          return null
        }
        if(this.Q8_Array==='') {
          this.someNull('pos8')
          return null
        }
        if(this.Q9_Array==='') {
          this.someNull('pos9')
          return null
        }
        if(this.Q10_1letter===''||this.Q10_2letter===''||this.Q10_3letter==='') {
          this.someNull('pos10')
          return null
        }
        if(this.Q11_Array==='') {
          this.someNull('pos11')
          return null
        }
        if(this.Q12==='') {
          this.someNull('pos12')
          return null
        }
        if(this.Q13_1letter===''||this.Q13_2letter===''||this.Q13_3letter==='') {
          this.someNull('pos13')
          return null
        }
        if(this.Q14_Array==='') {
          this.someNull('pos14')
          return null
        }
        if(this.Q15==='') {
          this.someNull('pos15')
          return null
        }
        if(this.Q16==='') {
          this.someNull('pos16')
          return null
        }
        if(this.Q17_1letter===''||this.Q17_2letter===''||this.Q17_3letter==='') {
          this.someNull('pos17')
          return null
        }
        if(this.Q18==='') {
          this.someNull('pos18')
          return null
        }
        if(this.Q19==='') {
          this.someNull('pos19')
          return null
        }
        if(this.Q20==='') {
          this.someNull('pos20')
          return null
        }
        if ((this.Q5_1!==''&&this.Q5_1A==='' || this.Q5_2!==''&&this.Q5_2A==='' || this.Q5_3!==''&&this.Q5_3A==='' || this.Q5_5!==''&&this.Q5_5A==='')&&this.Q4==='是') {
          this.wanning = '请填写国家/地区，谢谢！'
          this.popupVisible = true
          this.scroll('pos5')
          return null
        }
        if (this.name==='') {
          this.someNull1(pos21)
          return null
        }
        if (this.sex==='') {
          this.someNull1(pos22)
          return null
        }
        if (this.study_num==='') {
          this.someNull1(pos23)
          return null
        }
        if (this.tel==='') {
          this.someNull1(pos24)
          return null
        }
        if (this.email==='') {
          this.someNull1(pos24)
          return null
        }
        if (this.grade==='') {
          this.someNull1(pos27)
          return null
        }
        if (!this.isTel()) {
          this.wanning = '手机号格式错误，请检查！'
          this.popupVisible = true
          this.scroll('pos23')
          return null
        }
        if (!this.isEmail()) {
          this.wanning = '邮箱格式错误，请检查！'
          this.popupVisible = true
          this.scroll('pos24')
          return null
        }
        this.$http({url: 'server url', method: 'POST', data: {NAME: this.name, SEX: this.sex, NUMBER: this.study_num, COLLEGE: this.academy, MAJOR: this.profess, GRADE: this.grade, PHONE: this.tel, EMAIL: this.email, Q1: this.Q1, Q2: this.Q2, Q3: this.Q3, Q4: this.Q4, Q5_1: this.Q5_1, Q5_1A: this.Q5_1A, Q5_2: this.Q5_2, Q5_2A: this.Q5_2A, Q5_3: this.Q5_3, Q5_3A: this.Q5_3A, Q5_4: this.Q5_4, Q5_5: this.Q5_5, Q5_5A: this.Q5_5A, Q6: this.Q6, Q7_1: this.Q7_Array[0], Q7_2: this.Q7_Array[1], Q7_3: this.Q7_Array[2], Q8_1: this.Q8_Array[0], Q8_2: this.Q8_Array[1], Q8_3: this.Q8_Array[2], Q9_1: this.Q9_Array[0], Q9_2: this.Q9_Array[1], Q9_3: this.Q9_Array[2], Q10_1: this.Q10_Array[0], Q10_2: this.Q10_Array[1], Q10_3: this.Q10_Array[2], Q11_1: this.Q11_Array[0], Q11_2: this.Q11_Array[1], Q11_3: this.Q11_Array[2], Q12: this.Q12, Q13_1: this.Q13_Array[0], Q13_2: this.Q13_Array[1], Q13_3: this.Q13_Array[2], Q14_1: this.Q14_Array[0], Q14_2: this.Q14_Array[1], Q14_3: this.Q14_Array[2], Q15: this.Q15, Q16: this.Q16, Q17_1: this.Q17_Array[0], Q17_2: this.Q17_Array[1], Q17_3: this.Q17_Array[2], Q18: this.Q18, Q19: this.Q19, Q20: this.Q20}, emulateJSON: 'true'}).then(function (response) {
              if (response.status === 200) {
                  this.thanks= '你已完成问卷调查，非常感谢！'
                  this.popupVisible1 = true
              }
          }, function (response) {
            if (response.status === 309) {
              this.thanks= '此学号账户已填写过问卷。'
              this.popupVisible1 = true
            } else {
                this.wanning = '提交失败，请检查网络或稍后再试！'
                this.popupVisible = true
            }
          })
      },
      someNull(id) {
        this.wanning = '请完整填写问卷，谢谢！'
        this.popupVisible = true
        this.scroll(id)
      },
      someNull1(id) {
        this.wanning = '请完整个人信息，谢谢！'
        this.popupVisible = true
        this.scroll(id)
      },
      scroll(id) {
        $('html, body').animate({
            scrollTop: $('#'+id).offset().top
        }, 500)
      },
      isTel() {
        var pattern = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/
        return pattern.test(this.tel)
      },
      isEmail() {
        var pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
        return pattern.test(this.email)
      },
      toTop() {
        window.scrollTo(0, 0)
      }
  }
}
const major = {
    '法学院': ['法学'],
    '材料学院': ['材料科学与工程', '高分子材料与工程'],
    '传播学院': ['广告学', '传播学', '播音与主持艺术', '新闻学', '网络与新媒体'],
    '电子科学与技术学院': ['电子科学与技术', '光电信息科学与工程', '微电子科学与工程'],
    '高等研究院': ['理工创新实验班'],
    '管理学院': ['电子商务', '信息管理与信息系统', '工商管理', '市场营销', '人力资源管理', '行政管理'],
    '光电工程学院': ['光源与照明', '光电信息科学与工程', '测控技术与仪器'],
    '国际交流学院': ['国际交流学院'],
    '化学与环境工程学院': ['环境工程', '化学', '食品科学与工程', '应用化学', '新能源科学与工程'],
    '机电与控制工程学院': ['机械设计制造及其自动化', '自动化', '交通运输', '汽车服务工程', '电子科学与技术'],
    '计算机与软件学院': ['软件工程', '网络工程', '物联网工程', '计算机科学与技术'],
    '建筑与城市规划学院': ['建筑学', '城乡规划'],
    '经济学院': ['经济学', '会计学', '金融学', '物流管理', '国际经济与贸易'],
    '人文学院': ['历史学', '汉语言文学', '哲学'],
    '生命与海洋科学学院': ['生物技术', '海洋科学', '生物工程'],
    '师范学院': ['汉语言文学', '运动训练', '舞蹈编导', '运动训练', '音乐学', '教育技术学', '表演', '汉语国际教育', '美术学', '体育教育'],
    '高尔夫学院': ['高尔夫学院'],
    '数学与统计学院': ['数学与应用数学', '金融学', '信息与计算科学', '统计学'],
    '土木工程学院': ['土木工程', '工程管理', '交通工程'],
    '外国语学院': ['英语', '法语', '日语'],
    '物理与能源学院': ['应用物理学', '核技术', '核工程与核技术'],
    '心理与社会学院': ['应用心理学', '社会工作'],
    '信息工程学院': ['集成电路设计与集成系统', '电子信息工程', '通信工程'],
    '医学院': ['生物医学工程', '药学', '临床医学', '护理学'],
    '艺术设计学院': ['动画', '视觉传达设计', '环境设计', '产品设计', '服装设计与工程', '艺术设计学'],
    '研究生院': ['研究生院'],
  }
</script>
<style type="text/css" scoped>
  .my_header{
    height: 40px;
    letter-spacing: 5px;
  }
  .form_questions{
    margin-top: 50px;
  }
  .form_person{
    font-family: 微软雅黑;
    -moz-box-shadow: 2px 5px 5px #888888; /* 老的 Firefox */
    box-shadow: 2px 5px 5px #888888;
  }
  .question{
    background: #F4F7F4;
    border:1px solid #F4F7F4;
    margin-bottom: 10px;
    /*阴影效果*/
    -moz-box-shadow: 2px 5px 5px #888888; /* 老的 Firefox */
    box-shadow: 2px 5px 5px #888888;
  }
  .fill{
    /*margin-top: -6px;*/
  }
  .title{
    padding-left: 10px;
    padding-right: 10px;
    font-size: 16px;
    color: grey;
  }
  .letters{
    padding-left: 20px;
    height: 40px;
    line-height: 40px;
    margin-bottom: -10px;
    background: white;
  }
  .choose_imp{
    background: white;
    border:1px solid #F4F7F4;
  }
  .info{
    margin-top: 60px;
    text-align: center;
    font-weight: bold;
    border-top: 1px solid #F4F7F4;
    height: 30px;
    font-size: 18px;
    line-height: 50px;
  }
  .sex, .grade{
    margin-top: -8px;
  }
  .picker_label{
    margin-left: 10px;
  }
  .picker{
    border: 1px solid #F4F7F4;
    border-top: 2px solid #F4F7F4;
    margin-top: -1px;
  }
  #pos27{
    padding-bottom: 5px;
  }
  .btn_submit{
    margin-top: 60px;
  }
 .mint-popup-1 {
        width: 220px;
        border-radius: 5px;
        margin-top: -60px;
        padding: 20px;
        transform: translate(-50%, 0);
        font-size: 18px;
      }
  .mint-popup-1::before {
        triangle: 10px top #fff;
        content: '';
        position: absolute;
        top: -20px;
        right: 50px;
}
      .mint-popup-4 {
        font-family: 微软雅黑;
        font-size: 20px;
        text-align: center;
        line-height: 150px;
        width: 100%;
        height: 150px;
        .picker-slot-wrapper, .picker-item {
          backface-visibility: hidden;
        }
      }
</style>
