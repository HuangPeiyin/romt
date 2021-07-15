// sql语句
const sqlMap = {
    // 用户
    user: {
        add: 'insert into consumer(`u_name`,`u_password`,`u_sex`,`u_picture`,`u_birth`,`u_phone`,`u_email`) values(?,?,?,?,?,?,?);',
        update: 'update consumer set u_name=?,u_password=?,u_sex=?,u_picture=?,u_birth=?,u_phone=?,u_email=? where u_id=?;',
        selectPassword: 'select * from consumer where u_phone=? and u_password=?;',
        selectID: 'select * from consumer where u_id=?;',
        selectAll: 'select * from consumer;'
    },
    // 药物
    drug: {
        add: 'insert into drug_information(`drug_name`,`drug_picture`,`drug_type`,`drug_effect`,`drug_dose`) values(?,?,?,?,?);',
        update: 'update drug_information set drug_name=?,drug_picture=?,drug_type=?,drug_effect=?,drug_dose=? where drug_id=?;',
        delete: 'delete from drug_information where drug_id=?;',
        selectAll: 'select * from drug_information;',
        selectType: 'select * from drug_information where drug_type=?;',
    },
    // 书籍
    book: {
        add: 'insert into medicines_book(`book_name`,`book_author`,`book_press`,`book_place`,`book_ISBN`,`book_publication_time`,`book_picture`,`book_presentation`) values(?,?,?,?,?,?,?,?);',
        update: 'update medicines_book set book_name=?,book_author=?,book_press=?,book_place=?,book_ISBN=?,book_publication_time=?,book_picture=?,book_presentation=? where book_id=?;',
        delete: 'delete from medicines_book where book_id=?;',
        selectAll: 'select * from medicines_book;',
    },
    // 疾病
    sickness: {
        add: 'insert into sickness(`sick_name`,`sick_another_name`,`sick_type`,`sick_symptom`,`sick_department`) values(?,?,?,?,?);',
        update: 'update sickness set sick_name=?,sick_another_name=?,sick_type=?,sick_symptom=?,sick_department=? where sick_id=?;',
        delete: 'delete from sickness where sick_id=?;',
        selectAll: 'select * from sickness;',
        selectType: 'select * from sickness where sick_type=?;',
    },
    // 治疗
    treat: {
        add: 'insert into treat_methods(`sick_id`,`drug_id`,`treat_level`) values(?,?,?);',
        update: 'update treat_methods set sick_id=?,drug_id=?,treat_level=? where treat_id=?;',
        delete: 'delete from treat_methods where treat_id=?;',
        selectAll: 'select * from treat_methods;',
    },
    // 健康
    health: {
        add: 'insert into personal_health(`u_id`,`h_weight`,`h_height`,`h_temperature`,`h_blood_pressure`,`h_blood_glucose`,`h_blood_fat`,`h_heart_rate`,`h_sleep`,`identity`) values(?,?,?,?,?,?,?,?,?,?);',
        update: 'update personal_health set h_weight=?,h_height=?,h_temperature=?,h_blood_pressure=?,h_blood_glucose=?,h_blood_fat=?,h_heart_rate=?,h_sleep=? where u_id=? and identity=?;',
        delete: 'delete from personal_health where u_id=? and identity=?;',
        selectID: 'select * from personal_health where u_id=?;',
        selectAll: 'select * from personal_health;',
    }
}
module.exports = sqlMap