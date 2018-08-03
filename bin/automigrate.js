'use strict';

const path = require('path');

const app = require(path.resolve(__dirname, '../server/server'));
const ds = app.datasources.prodigiApi;
ds.automigrate('Company', function(err) {
  if (err) throw err;

  const companies = [
    {
      name: 'Realcube',
      email: 'kpearton0@samsung.com',
      logo: 'https://robohash.org/ipsamreiciendisatque.png?size=50x50&set=set1',
      size: 12,
      contact:
        'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
      website: 'https://mail.ru/eu/felis/fusce.html?erat=non',
      techStack: 'Persistent',
      description:
        'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    },
    {
      name: 'Zoonder',
      email: 'garrell1@prweb.com',
      logo: 'https://robohash.org/etfaciliset.png?size=50x50&set=set1',
      size: 99,
      contact:
        'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
      website:
        'http://smh.com.au/blandit/nam/nulla/integer/pede/justo/lacinia.png?pede=pharetra&ac=magna&diam=vestibulum&cras=aliquet&pellentesque=ultrices&volutpat=erat&dui=tortor&maecenas=sollicitudin&tristique=mi&est=sit&et=amet&tempus=lobortis&semper=sapien&est=sapien&quam=non&pharetra=mi&magna=integer&ac=ac&consequat=neque&metus=duis&sapien=bibendum&ut=morbi&nunc=non&vestibulum=quam&ante=nec&ipsum=dui&primis=luctus&in=rutrum&faucibus=nulla&orci=tellus&luctus=in&et=sagittis&ultrices=dui&posuere=vel&cubilia=nisl&curae=duis&mauris=ac&viverra=nibh&diam=fusce&vitae=lacus&quam=purus&suspendisse=aliquet&potenti=at&nullam=feugiat&porttitor=non&lacus=pretium&at=quis&turpis=lectus&donec=suspendisse&posuere=potenti&metus=in&vitae=eleifend&ipsum=quam&aliquam=a&non=odio&mauris=in&morbi=hac&non=habitasse',
      techStack: 'analyzing',
      description:
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    },
    {
      name: 'Edgewire',
      email: 'gbedle2@sitemeter.com',
      logo:
        'https://robohash.org/officiautnecessitatibus.png?size=50x50&set=set1',
      size: 95,
      contact:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
      website:
        'http://miibeian.gov.cn/purus/aliquet/at/feugiat.js?luctus=sit&cum=amet&sociis=consectetuer&natoque=adipiscing&penatibus=elit&et=proin&magnis=interdum&dis=mauris&parturient=non&montes=ligula&nascetur=pellentesque&ridiculus=ultrices&mus=phasellus&vivamus=id&vestibulum=sapien&sagittis=in&sapien=sapien&cum=iaculis&sociis=congue&natoque=vivamus&penatibus=metus&et=arcu&magnis=adipiscing&dis=molestie&parturient=hendrerit&montes=at&nascetur=vulputate&ridiculus=vitae&mus=nisl&etiam=aenean&vel=lectus&augue=pellentesque&vestibulum=eget&rutrum=nunc&rutrum=donec&neque=quis&aenean=orci&auctor=eget&gravida=orci&sem=vehicula&praesent=condimentum&id=curabitur&massa=in&id=libero&nisl=ut&venenatis=massa&lacinia=volutpat&aenean=convallis&sit=morbi&amet=odio&justo=odio&morbi=elementum&ut=eu&odio=interdum&cras=eu&mi=tincidunt&pede=in&malesuada=leo&in=maecenas&imperdiet=pulvinar&et=lobortis&commodo=est&vulputate=phasellus&justo=sit&in=amet&blandit=erat&ultrices=nulla&enim=tempus&lorem=vivamus&ipsum=in&dolor=felis&sit=eu&amet=sapien&consectetuer=cursus&adipiscing=vestibulum&elit=proin&proin=eu&interdum=mi&mauris=nulla&non=ac&ligula=enim&pellentesque=in&ultrices=tempor&phasellus=turpis&id=nec&sapien=euismod&in=scelerisque&sapien=quam&iaculis=turpis&congue=adipiscing&vivamus=lorem&metus=vitae&arcu=mattis&adipiscing=nibh&molestie=ligula&hendrerit=nec&at=sem',
      techStack: 'zero tolerance',
      description:
        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    },
    {
      name: 'Jaxbean',
      email: 'nlording3@arstechnica.com',
      logo: 'https://robohash.org/undemagnivoluptatem.jpg?size=50x50&set=set1',
      size: 63,
      contact:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
      website:
        'https://japanpost.jp/mi/nulla/ac/enim/in/tempor.html?vestibulum=hac&ac=habitasse&est=platea&lacinia=dictumst&nisi=morbi&venenatis=vestibulum&tristique=velit&fusce=id&congue=pretium',
      techStack: 'Expanded',
      description:
        'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    },
    {
      name: 'Tagpad',
      email: 'omatley4@blinklist.com',
      logo:
        'https://robohash.org/reprehenderitofficiaqui.png?size=50x50&set=set1',
      size: 62,
      contact:
        'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
      website:
        'https://yellowpages.com/scelerisque/mauris/sit/amet/eros/suspendisse/accumsan.xml?in=vestibulum&felis=vestibulum&eu=ante',
      techStack: 'Multi-tiered',
      description:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    },
    {
      name: 'Feedfish',
      email: 'hescalante5@intel.com',
      logo: 'https://robohash.org/quasundeexpedita.jpg?size=50x50&set=set1',
      size: 87,
      contact:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
      website:
        'http://macromedia.com/bibendum/felis.png?amet=adipiscing&justo=elit&morbi=proin&ut=risus&odio=praesent&cras=lectus&mi=vestibulum&pede=quam&malesuada=sapien&in=varius&imperdiet=ut&et=blandit&commodo=non&vulputate=interdum&justo=in&in=ante&blandit=vestibulum&ultrices=ante&enim=ipsum&lorem=primis&ipsum=in&dolor=faucibus&sit=orci&amet=luctus&consectetuer=et&adipiscing=ultrices&elit=posuere&proin=cubilia&interdum=curae&mauris=duis&non=faucibus&ligula=accumsan&pellentesque=odio&ultrices=curabitur&phasellus=convallis&id=duis&sapien=consequat&in=dui&sapien=nec&iaculis=nisi&congue=volutpat&vivamus=eleifend&metus=donec&arcu=ut&adipiscing=dolor&molestie=morbi&hendrerit=vel&at=lectus&vulputate=in&vitae=quam',
      techStack: 'array',
      description:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    },
    {
      name: 'Riffpath',
      email: 'dlishman6@facebook.com',
      logo:
        'https://robohash.org/impeditlaudantiumvoluptatem.bmp?size=50x50&set=set1',
      size: 59,
      contact:
        'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
      website:
        'http://alibaba.com/diam/erat/fermentum/justo/nec/condimentum/neque.aspx?sagittis=ut&sapien=odio&cum=cras&sociis=mi&natoque=pede&penatibus=malesuada&et=in&magnis=imperdiet&dis=et&parturient=commodo&montes=vulputate&nascetur=justo&ridiculus=in&mus=blandit&etiam=ultrices&vel=enim&augue=lorem&vestibulum=ipsum&rutrum=dolor&rutrum=sit&neque=amet&aenean=consectetuer&auctor=adipiscing&gravida=elit&sem=proin&praesent=interdum&id=mauris&massa=non&id=ligula&nisl=pellentesque&venenatis=ultrices&lacinia=phasellus&aenean=id&sit=sapien&amet=in&justo=sapien&morbi=iaculis&ut=congue&odio=vivamus&cras=metus&mi=arcu&pede=adipiscing&malesuada=molestie&in=hendrerit&imperdiet=at&et=vulputate&commodo=vitae&vulputate=nisl&justo=aenean&in=lectus&blandit=pellentesque&ultrices=eget&enim=nunc&lorem=donec&ipsum=quis&dolor=orci&sit=eget&amet=orci&consectetuer=vehicula&adipiscing=condimentum&elit=curabitur&proin=in&interdum=libero&mauris=ut&non=massa&ligula=volutpat&pellentesque=convallis&ultrices=morbi&phasellus=odio&id=odio&sapien=elementum&in=eu&sapien=interdum&iaculis=eu&congue=tincidunt&vivamus=in&metus=leo&arcu=maecenas&adipiscing=pulvinar&molestie=lobortis&hendrerit=est&at=phasellus&vulputate=sit&vitae=amet&nisl=erat&aenean=nulla',
      techStack: 'Cross-group',
      description:
        'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    },
    {
      name: 'Flashspan',
      email: 'msewter7@last.fm',
      logo: 'https://robohash.org/quoanimiporro.png?size=50x50&set=set1',
      size: 12,
      contact:
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
      website:
        'https://so-net.ne.jp/eros.json?in=vulputate&felis=elementum&donec=nullam&semper=varius&sapien=nulla&a=facilisi&libero=cras&nam=non&dui=velit&proin=nec&leo=nisi',
      techStack: 'full-range',
      description:
        'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    },
    {
      name: 'Quatz',
      email: 'dmila8@godaddy.com',
      logo: 'https://robohash.org/seddoloreseos.jpg?size=50x50&set=set1',
      size: 70,
      contact:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      website:
        'http://creativecommons.org/sit/amet/turpis/elementum/ligula/vehicula.json?neque=vivamus&aenean=metus&auctor=arcu&gravida=adipiscing&sem=molestie&praesent=hendrerit&id=at&massa=vulputate&id=vitae&nisl=nisl&venenatis=aenean&lacinia=lectus&aenean=pellentesque&sit=eget&amet=nunc&justo=donec&morbi=quis&ut=orci&odio=eget&cras=orci&mi=vehicula&pede=condimentum&malesuada=curabitur&in=in&imperdiet=libero',
      techStack: 'Virtual',
      description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    },
    {
      name: 'Bluezoom',
      email: 'mneilson9@behance.net',
      logo:
        'https://robohash.org/solutadoloreconsectetur.png?size=50x50&set=set1',
      size: 50,
      contact:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
      website:
        'http://1688.com/at/feugiat/non/pretium.json?orci=felis&nullam=sed&molestie=interdum&nibh=venenatis&in=turpis&lectus=enim&pellentesque=blandit&at=mi&nulla=in&suspendisse=porttitor',
      techStack: 'Cross-group',
      description:
        'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    },
  ];
  companies.forEach(function(company) {
    app.models.Company.create(company, function(err, model) {
      if (err) throw err;

      console.log('Created:', model);
    });
  });

  ds.disconnect();
});

ds.automigrate('Job', function(err) {
  if (err) throw err;

  const jobs = [
    {
      title: 'Chief Design Engineer',
      description:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
      salary: 1755.11,
      startDate: '2018/12/22',
      postDate: '2018/08/07',
      companyId: '5b64b072f4cc3003bc6c87a3',
    },
    {
      title: 'Tax Accountant',
      description:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
      salary: 9000.67,
      startDate: '2019/06/10',
      postDate: '2018/06/09',
      companyId: '5b64b072f4cc3003bc6c87a4',
    },
    {
      title: 'Database Administrator III',
      description:
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
      salary: 4412.03,
      startDate: '2019/04/11',
      postDate: '2018/07/10',
      companyId: '5b64b072f4cc3003bc6c87a4',
    },
    {
      title: 'Desktop Support Technician',
      description:
        'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
      salary: 6975.27,
      startDate: '2019/01/24',
      postDate: '2018/08/16',
      companyId: '5b64b072f4cc3003bc6c87a8',
    },
    {
      title: 'Sales Representative',
      description:
        'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
      salary: 8491.52,
      startDate: '2019/01/28',
      postDate: '2018/08/17',
      companyId: '5b64b072f4cc3003bc6c87a2',
    },
    {
      title: 'Information Systems Manager',
      description:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      salary: 2192.09,
      startDate: '2019/01/06',
      postDate: '2018/07/05',
      companyId: '5b64b072f4cc3003bc6c87a7',
    },
    {
      title: 'Graphic Designer',
      description:
        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
      salary: 4754.33,
      startDate: '2018/09/06',
      postDate: '2018/07/31',
      companyId: '5b64b072f4cc3003bc6c87a5',
    },
    {
      title: 'Assistant Media Planner',
      description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
      salary: 8296.38,
      startDate: '2019/06/22',
      postDate: '2018/07/12',
      companyId: '5b64b072f4cc3003bc6c87a2',
    },
    {
      title: 'Staff Accountant IV',
      description:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
      salary: 3443.12,
      startDate: '2019/01/22',
      postDate: '2018/07/26',
      companyId: '5b64b072f4cc3003bc6c87a8',
    },
    {
      title: 'Programmer Analyst III',
      description:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
      salary: 1011.7,
      startDate: '2018/08/11',
      postDate: '2018/06/21',
      companyId: '5b64b072f4cc3003bc6c87a6',
    },
    {
      title: 'Administrative Officer',
      description:
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
      salary: 1242.9,
      startDate: '2019/05/26',
      postDate: '2018/07/26',
      companyId: '5b64b072f4cc3003bc6c87a4',
    },
    {
      title: 'Account Coordinator',
      description:
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      salary: 6123.4,
      startDate: '2018/12/06',
      postDate: '2018/06/12',
      companyId: '5b64b072f4cc3003bc6c87a7',
    },
    {
      title: 'Analog Circuit Design manager',
      description:
        'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
      salary: 1550.06,
      startDate: '2019/05/21',
      postDate: '2018/06/03',
      companyId: '5b64b072f4cc3003bc6c87a2',
    },
    {
      title: 'Design Engineer',
      description:
        'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
      salary: 8155.44,
      startDate: '2019/07/27',
      postDate: '2018/08/23',
      companyId: '5b64b072f4cc3003bc6c87a3',
    },
    {
      title: 'Financial Analyst',
      description:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
      salary: 87.34,
      startDate: '2019/04/02',
      postDate: '2018/08/13',
      companyId: '5b64b072f4cc3003bc6c87a2',
    },
    {
      title: 'Quality Control Specialist',
      description:
        'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      salary: 5458.49,
      startDate: '2019/05/17',
      postDate: '2018/08/30',
      companyId: '5b64b072f4cc3003bc6c87a2',
    },
    {
      title: 'Nurse Practicioner',
      description:
        'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
      salary: 9897.0,
      startDate: '2019/02/11',
      postDate: '2018/06/02',
      companyId: '5b64b072f4cc3003bc6c87a6',
    },
    {
      title: 'Internal Auditor',
      description:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
      salary: 3739.27,
      startDate: '2019/01/02',
      postDate: '2018/07/04',
      companyId: '5b64b072f4cc3003bc6c87a5',
    },
    {
      title: 'Desktop Support Technician',
      description:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
      salary: 8226.58,
      startDate: '2018/11/19',
      postDate: '2018/08/29',
      companyId: '5b64b072f4cc3003bc6c87a2',
    },
    {
      title: 'Senior Developer',
      description:
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
      salary: 1287.38,
      startDate: '2019/03/10',
      postDate: '2018/06/25',
      companyId: '5b64b072f4cc3003bc6c87a3',
    },
    {
      title: 'Data Coordiator',
      description:
        'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
      salary: 7202.42,
      startDate: '2019/07/07',
      postDate: '2018/06/19',
      companyId: '5b64b072f4cc3003bc6c87a5',
    },
    {
      title: 'Dental Hygienist',
      description:
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
      salary: 1806.79,
      startDate: '2018/08/13',
      postDate: '2018/08/09',
      companyId: '5b64b072f4cc3003bc6c87a4',
    },
    {
      title: 'Speech Pathologist',
      description:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
      salary: 6780.38,
      startDate: '2018/12/11',
      postDate: '2018/06/29',
      companyId: '5b64b072f4cc3003bc6c87a7',
    },
    {
      title: 'Nuclear Power Engineer',
      description:
        'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
      salary: 3695.16,
      startDate: '2018/11/08',
      postDate: '2018/07/18',
      companyId: '5b64b072f4cc3003bc6c87a5',
    },
    {
      title: 'Account Representative III',
      description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
      salary: 790.66,
      startDate: '2019/06/12',
      postDate: '2018/08/29',
      companyId: '5b64b072f4cc3003bc6c87a3',
    },
    {
      title: 'Human Resources Manager',
      description:
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
      salary: 7712.96,
      startDate: '2019/05/29',
      postDate: '2018/07/23',
      companyId: '5b64b072f4cc3003bc6c87a6',
    },
    {
      title: 'Desktop Support Technician',
      description:
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      salary: 7522.93,
      startDate: '2018/10/05',
      postDate: '2018/07/02',
      companyId: '5b64b072f4cc3003bc6c87a3',
    },
    {
      title: 'Social Worker',
      description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
      salary: 8327.8,
      startDate: '2019/03/11',
      postDate: '2018/08/16',
      companyId: '5b64b072f4cc3003bc6c87a2',
    },
    {
      title: 'Compensation Analyst',
      description:
        'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
      salary: 1818.25,
      startDate: '2019/04/18',
      postDate: '2018/07/03',
      companyId: '5b64b072f4cc3003bc6c87a8',
    },
    {
      title: 'Assistant Professor',
      description:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
      salary: 2987.58,
      startDate: '2018/08/06',
      postDate: '2018/07/13',
      companyId: '5b64b072f4cc3003bc6c87a4',
    },
    {
      title: 'Business Systems Development Analyst',
      description:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
      salary: 1033.23,
      startDate: '2019/06/03',
      postDate: '2018/08/01',
      companyId: '5b64b072f4cc3003bc6c87a6',
    },
    {
      title: 'Structural Engineer',
      description:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
      salary: 8467.33,
      startDate: '2018/08/05',
      postDate: '2018/08/17',
      companyId: '5b64b072f4cc3003bc6c87a3',
    },
    {
      title: 'Administrative Officer',
      description:
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
      salary: 2925.96,
      startDate: '2018/12/13',
      postDate: '2018/07/31',
      companyId: '5b64b072f4cc3003bc6c87a4',
    },
    {
      title: 'Administrative Assistant II',
      description:
        'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
      salary: 9365.42,
      startDate: '2018/11/07',
      postDate: '2018/07/13',
      companyId: '5b64b072f4cc3003bc6c87a5',
    },
    {
      title: 'Geologist IV',
      description:
        'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
      salary: 6842.54,
      startDate: '2018/10/27',
      postDate: '2018/08/18',
      companyId: '5b64b072f4cc3003bc6c87a7',
    },
    {
      title: 'General Manager',
      description:
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      salary: 8995.6,
      startDate: '2019/01/19',
      postDate: '2018/07/24',
      companyId: '5b64b072f4cc3003bc6c87a6',
    },
    {
      title: 'Systems Administrator I',
      description:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
      salary: 5932.98,
      startDate: '2018/10/03',
      postDate: '2018/08/21',
      companyId: '5b64b072f4cc3003bc6c87a6',
    },
    {
      title: 'Staff Scientist',
      description:
        'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
      salary: 6386.46,
      startDate: '2019/02/01',
      postDate: '2018/08/13',
      companyId: '5b64b072f4cc3003bc6c87a7',
    },
    {
      title: 'Senior Sales Associate',
      description:
        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
      salary: 5138.6,
      startDate: '2019/01/24',
      postDate: '2018/08/17',
      companyId: '5b64b072f4cc3003bc6c87a5',
    },
    {
      title: 'Librarian',
      description:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
      salary: 9976.1,
      startDate: '2019/05/29',
      postDate: '2018/06/07',
      companyId: '5b64b072f4cc3003bc6c87a4',
    },
    {
      title: 'Executive Secretary',
      description:
        'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
      salary: 9569.41,
      startDate: '2018/10/25',
      postDate: '2018/08/15',
      companyId: '5b64b072f4cc3003bc6c87a6',
    },
    {
      title: 'Senior Developer',
      description:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
      salary: 9607.65,
      startDate: '2018/12/30',
      postDate: '2018/07/19',
      companyId: '5b64b072f4cc3003bc6c87a2',
    },
    {
      title: 'Web Designer III',
      description:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
      salary: 4663.18,
      startDate: '2019/06/17',
      postDate: '2018/07/07',
      companyId: '5b64b072f4cc3003bc6c87a3',
    },
    {
      title: 'Senior Financial Analyst',
      description:
        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
      salary: 468.67,
      startDate: '2018/12/05',
      postDate: '2018/07/12',
      companyId: '5b64b072f4cc3003bc6c87a3',
    },
    {
      title: 'Clinical Specialist',
      description:
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
      salary: 5368.13,
      startDate: '2018/11/23',
      postDate: '2018/05/31',
      companyId: '5b64b072f4cc3003bc6c87a8',
    },
    {
      title: 'Senior Cost Accountant',
      description:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
      salary: 2475.75,
      startDate: '2018/11/15',
      postDate: '2018/07/03',
      companyId: '5b64b072f4cc3003bc6c87a7',
    },
    {
      title: 'Account Coordinator',
      description:
        'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
      salary: 8498.78,
      startDate: '2018/08/20',
      postDate: '2018/07/20',
      companyId: '5b64b072f4cc3003bc6c87a8',
    },
    {
      title: 'Food Chemist',
      description:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
      salary: 6687.79,
      startDate: '2019/04/28',
      postDate: '2018/06/15',
      companyId: '5b64b072f4cc3003bc6c87a7',
    },
    {
      title: 'Programmer III',
      description:
        'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      salary: 8285.34,
      startDate: '2019/06/27',
      postDate: '2018/08/20',
      companyId: '5b64b072f4cc3003bc6c87a4',
    },
    {
      title: 'Recruiting Manager',
      description:
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
      salary: 7711.06,
      startDate: '2018/09/21',
      postDate: '2018/07/26',
      companyId: '5b64b072f4cc3003bc6c87a4',
    },
  ];
  jobs.forEach(function(job) {
    app.models.Job.create(job, function(err, model) {
      if (err) throw err;

      console.log('Created:', model);
    });
  });
  ds.disconnect();
});

ds.automigrate('Student', function(err) {
  if (err) throw err;
  const students = [
    {
      name: 'Brendan',
      email: 'bsowersby0@usatoday.com',
      goal:
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
      term: 1,
      photo:
        'https://robohash.org/quiaconsecteturtempore.png?size=50x50&set=set1',
      resume: null,
      githubLink: null,
      linkedinLink: null,
    },
    {
      name: 'Donal',
      email: 'drosewarne1@paypal.com',
      goal:
        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      term: 1,
      photo: 'https://robohash.org/officiisutveniam.bmp?size=50x50&set=set1',
      resume: null,
      githubLink: null,
      linkedinLink: null,
    },
    {
      name: 'Christie',
      email: 'cjelly2@vistaprint.com',
      goal:
        'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
      term: 3,
      photo: 'https://robohash.org/magninoniste.jpg?size=50x50&set=set1',
      resume: null,
      githubLink: null,
      linkedinLink: null,
    },
    {
      name: 'Constance',
      email: 'ctasseler3@clickbank.net',
      goal:
        'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
      term: 4,
      photo: 'https://robohash.org/estquisint.jpg?size=50x50&set=set1',
      resume: null,
      githubLink: null,
      linkedinLink: null,
    },
    {
      name: 'Morris',
      email: 'mlampens4@dagondesign.com',
      goal: 'Fusce consequat. Nulla nisl. Nunc nisl.',
      term: 1,
      photo:
        'https://robohash.org/perspiciatismodivelit.png?size=50x50&set=set1',
      resume: null,
      githubLink: null,
      linkedinLink: null,
    },
    {
      name: 'Ingrim',
      email: 'iadamczewski5@dagondesign.com',
      goal:
        'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
      term: 3,
      photo:
        'https://robohash.org/nihilsimiliqueconsectetur.bmp?size=50x50&set=set1',
      resume: null,
      githubLink: null,
      linkedinLink: null,
    },
    {
      name: 'Rosalie',
      email: 'rkarpets6@apache.org',
      goal:
        'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      term: 3,
      photo: 'https://robohash.org/omnissolutaenim.jpg?size=50x50&set=set1',
      resume: null,
      githubLink: null,
      linkedinLink: null,
    },
    {
      name: 'Jackie',
      email: 'jflieg7@cyberchimps.com',
      goal:
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
      term: 2,
      photo: 'https://robohash.org/possimusquasiomnis.png?size=50x50&set=set1',
      resume: null,
      githubLink: null,
      linkedinLink: null,
    },
    {
      name: 'Genevieve',
      email: 'gdartnall8@edublogs.org',
      goal:
        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
      term: 2,
      photo: 'https://robohash.org/aliquidiurequo.jpg?size=50x50&set=set1',
      resume: null,
      githubLink: null,
      linkedinLink: null,
    },
    {
      name: 'Martica',
      email: 'mscroggins9@nps.gov',
      goal:
        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
      term: 2,
      photo:
        'https://robohash.org/pariaturexercitationemest.bmp?size=50x50&set=set1',
      resume: null,
      githubLink: null,
      linkedinLink: null,
    },
  ];
  students.forEach(function(student) {
    app.models.Student.create(student, function(err, model) {
      if (err) throw err;

      console.log('Created:', model);
    });
  });
  ds.disconnect();
});
