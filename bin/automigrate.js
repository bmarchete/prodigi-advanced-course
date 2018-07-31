'use strict';

const path = require('path');

const app = require(path.resolve(__dirname, '../server/server'));
const ds = app.datasources.prodigiApi;
// ds.automigrate('Company', function(err) {
//   if (err) throw err;

//   const companies = [
//     {
//       name: 'Realcube',
//       email: 'kpearton0@samsung.com',
//       logo: 'https://robohash.org/ipsamreiciendisatque.png?size=50x50&set=set1',
//       size: 12,
//       contact:
//         'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
//       website: 'https://mail.ru/eu/felis/fusce.html?erat=non',
//       techStack: 'Persistent',
//       description:
//         'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
//     },
//     {
//       name: 'Zoonder',
//       email: 'garrell1@prweb.com',
//       logo: 'https://robohash.org/etfaciliset.png?size=50x50&set=set1',
//       size: 99,
//       contact:
//         'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
//       website:
//         'http://smh.com.au/blandit/nam/nulla/integer/pede/justo/lacinia.png?pede=pharetra&ac=magna&diam=vestibulum&cras=aliquet&pellentesque=ultrices&volutpat=erat&dui=tortor&maecenas=sollicitudin&tristique=mi&est=sit&et=amet&tempus=lobortis&semper=sapien&est=sapien&quam=non&pharetra=mi&magna=integer&ac=ac&consequat=neque&metus=duis&sapien=bibendum&ut=morbi&nunc=non&vestibulum=quam&ante=nec&ipsum=dui&primis=luctus&in=rutrum&faucibus=nulla&orci=tellus&luctus=in&et=sagittis&ultrices=dui&posuere=vel&cubilia=nisl&curae=duis&mauris=ac&viverra=nibh&diam=fusce&vitae=lacus&quam=purus&suspendisse=aliquet&potenti=at&nullam=feugiat&porttitor=non&lacus=pretium&at=quis&turpis=lectus&donec=suspendisse&posuere=potenti&metus=in&vitae=eleifend&ipsum=quam&aliquam=a&non=odio&mauris=in&morbi=hac&non=habitasse',
//       techStack: 'analyzing',
//       description:
//         'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
//     },
//     {
//       name: 'Edgewire',
//       email: 'gbedle2@sitemeter.com',
//       logo:
//         'https://robohash.org/officiautnecessitatibus.png?size=50x50&set=set1',
//       size: 95,
//       contact:
//         'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
//       website:
//         'http://miibeian.gov.cn/purus/aliquet/at/feugiat.js?luctus=sit&cum=amet&sociis=consectetuer&natoque=adipiscing&penatibus=elit&et=proin&magnis=interdum&dis=mauris&parturient=non&montes=ligula&nascetur=pellentesque&ridiculus=ultrices&mus=phasellus&vivamus=id&vestibulum=sapien&sagittis=in&sapien=sapien&cum=iaculis&sociis=congue&natoque=vivamus&penatibus=metus&et=arcu&magnis=adipiscing&dis=molestie&parturient=hendrerit&montes=at&nascetur=vulputate&ridiculus=vitae&mus=nisl&etiam=aenean&vel=lectus&augue=pellentesque&vestibulum=eget&rutrum=nunc&rutrum=donec&neque=quis&aenean=orci&auctor=eget&gravida=orci&sem=vehicula&praesent=condimentum&id=curabitur&massa=in&id=libero&nisl=ut&venenatis=massa&lacinia=volutpat&aenean=convallis&sit=morbi&amet=odio&justo=odio&morbi=elementum&ut=eu&odio=interdum&cras=eu&mi=tincidunt&pede=in&malesuada=leo&in=maecenas&imperdiet=pulvinar&et=lobortis&commodo=est&vulputate=phasellus&justo=sit&in=amet&blandit=erat&ultrices=nulla&enim=tempus&lorem=vivamus&ipsum=in&dolor=felis&sit=eu&amet=sapien&consectetuer=cursus&adipiscing=vestibulum&elit=proin&proin=eu&interdum=mi&mauris=nulla&non=ac&ligula=enim&pellentesque=in&ultrices=tempor&phasellus=turpis&id=nec&sapien=euismod&in=scelerisque&sapien=quam&iaculis=turpis&congue=adipiscing&vivamus=lorem&metus=vitae&arcu=mattis&adipiscing=nibh&molestie=ligula&hendrerit=nec&at=sem',
//       techStack: 'zero tolerance',
//       description:
//         'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
//     },
//     {
//       name: 'Jaxbean',
//       email: 'nlording3@arstechnica.com',
//       logo: 'https://robohash.org/undemagnivoluptatem.jpg?size=50x50&set=set1',
//       size: 63,
//       contact:
//         'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
//       website:
//         'https://japanpost.jp/mi/nulla/ac/enim/in/tempor.html?vestibulum=hac&ac=habitasse&est=platea&lacinia=dictumst&nisi=morbi&venenatis=vestibulum&tristique=velit&fusce=id&congue=pretium',
//       techStack: 'Expanded',
//       description:
//         'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
//     },
//     {
//       name: 'Tagpad',
//       email: 'omatley4@blinklist.com',
//       logo:
//         'https://robohash.org/reprehenderitofficiaqui.png?size=50x50&set=set1',
//       size: 62,
//       contact:
//         'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
//       website:
//         'https://yellowpages.com/scelerisque/mauris/sit/amet/eros/suspendisse/accumsan.xml?in=vestibulum&felis=vestibulum&eu=ante',
//       techStack: 'Multi-tiered',
//       description:
//         'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
//     },
//     {
//       name: 'Feedfish',
//       email: 'hescalante5@intel.com',
//       logo: 'https://robohash.org/quasundeexpedita.jpg?size=50x50&set=set1',
//       size: 87,
//       contact:
//         'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
//       website:
//         'http://macromedia.com/bibendum/felis.png?amet=adipiscing&justo=elit&morbi=proin&ut=risus&odio=praesent&cras=lectus&mi=vestibulum&pede=quam&malesuada=sapien&in=varius&imperdiet=ut&et=blandit&commodo=non&vulputate=interdum&justo=in&in=ante&blandit=vestibulum&ultrices=ante&enim=ipsum&lorem=primis&ipsum=in&dolor=faucibus&sit=orci&amet=luctus&consectetuer=et&adipiscing=ultrices&elit=posuere&proin=cubilia&interdum=curae&mauris=duis&non=faucibus&ligula=accumsan&pellentesque=odio&ultrices=curabitur&phasellus=convallis&id=duis&sapien=consequat&in=dui&sapien=nec&iaculis=nisi&congue=volutpat&vivamus=eleifend&metus=donec&arcu=ut&adipiscing=dolor&molestie=morbi&hendrerit=vel&at=lectus&vulputate=in&vitae=quam',
//       techStack: 'array',
//       description:
//         'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
//     },
//     {
//       name: 'Riffpath',
//       email: 'dlishman6@facebook.com',
//       logo:
//         'https://robohash.org/impeditlaudantiumvoluptatem.bmp?size=50x50&set=set1',
//       size: 59,
//       contact:
//         'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
//       website:
//         'http://alibaba.com/diam/erat/fermentum/justo/nec/condimentum/neque.aspx?sagittis=ut&sapien=odio&cum=cras&sociis=mi&natoque=pede&penatibus=malesuada&et=in&magnis=imperdiet&dis=et&parturient=commodo&montes=vulputate&nascetur=justo&ridiculus=in&mus=blandit&etiam=ultrices&vel=enim&augue=lorem&vestibulum=ipsum&rutrum=dolor&rutrum=sit&neque=amet&aenean=consectetuer&auctor=adipiscing&gravida=elit&sem=proin&praesent=interdum&id=mauris&massa=non&id=ligula&nisl=pellentesque&venenatis=ultrices&lacinia=phasellus&aenean=id&sit=sapien&amet=in&justo=sapien&morbi=iaculis&ut=congue&odio=vivamus&cras=metus&mi=arcu&pede=adipiscing&malesuada=molestie&in=hendrerit&imperdiet=at&et=vulputate&commodo=vitae&vulputate=nisl&justo=aenean&in=lectus&blandit=pellentesque&ultrices=eget&enim=nunc&lorem=donec&ipsum=quis&dolor=orci&sit=eget&amet=orci&consectetuer=vehicula&adipiscing=condimentum&elit=curabitur&proin=in&interdum=libero&mauris=ut&non=massa&ligula=volutpat&pellentesque=convallis&ultrices=morbi&phasellus=odio&id=odio&sapien=elementum&in=eu&sapien=interdum&iaculis=eu&congue=tincidunt&vivamus=in&metus=leo&arcu=maecenas&adipiscing=pulvinar&molestie=lobortis&hendrerit=est&at=phasellus&vulputate=sit&vitae=amet&nisl=erat&aenean=nulla',
//       techStack: 'Cross-group',
//       description:
//         'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
//     },
//     {
//       name: 'Flashspan',
//       email: 'msewter7@last.fm',
//       logo: 'https://robohash.org/quoanimiporro.png?size=50x50&set=set1',
//       size: 12,
//       contact:
//         'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
//       website:
//         'https://so-net.ne.jp/eros.json?in=vulputate&felis=elementum&donec=nullam&semper=varius&sapien=nulla&a=facilisi&libero=cras&nam=non&dui=velit&proin=nec&leo=nisi',
//       techStack: 'full-range',
//       description:
//         'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
//     },
//     {
//       name: 'Quatz',
//       email: 'dmila8@godaddy.com',
//       logo: 'https://robohash.org/seddoloreseos.jpg?size=50x50&set=set1',
//       size: 70,
//       contact:
//         'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
//       website:
//         'http://creativecommons.org/sit/amet/turpis/elementum/ligula/vehicula.json?neque=vivamus&aenean=metus&auctor=arcu&gravida=adipiscing&sem=molestie&praesent=hendrerit&id=at&massa=vulputate&id=vitae&nisl=nisl&venenatis=aenean&lacinia=lectus&aenean=pellentesque&sit=eget&amet=nunc&justo=donec&morbi=quis&ut=orci&odio=eget&cras=orci&mi=vehicula&pede=condimentum&malesuada=curabitur&in=in&imperdiet=libero',
//       techStack: 'Virtual',
//       description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
//     },
//     {
//       name: 'Bluezoom',
//       email: 'mneilson9@behance.net',
//       logo:
//         'https://robohash.org/solutadoloreconsectetur.png?size=50x50&set=set1',
//       size: 50,
//       contact:
//         'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
//       website:
//         'http://1688.com/at/feugiat/non/pretium.json?orci=felis&nullam=sed&molestie=interdum&nibh=venenatis&in=turpis&lectus=enim&pellentesque=blandit&at=mi&nulla=in&suspendisse=porttitor',
//       techStack: 'Cross-group',
//       description:
//         'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
//     },
//   ];
//   const count = companies.length;
//   companies.forEach(function(company) {
//     app.models.Company.create(company, function(err, model) {
//       if (err) throw err;

//       console.log('Created:', model);
//     });
//   });
//   ds.disconnect();
// });

ds.automigrate('Job', function(err) {
  if (err) throw err;

  const jobs = [
    {
      title: 'Help Desk Operator',
      description:
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
      salary: 26.53,
      startDate: '2019/02/11',
      postDate: '2018/06/25',
      companyId: '5b5fdf59affce2221cd5d141',
    },
    {
      title: 'Budget/Accounting Analyst I',
      description:
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
      salary: 5781.08,
      startDate: '2018/08/31',
      postDate: '2018/08/12',
      companyId: '5b5fdf59affce2221cd5d13e',
    },
    {
      title: 'Senior Sales Associate',
      description:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
      salary: 1930.47,
      startDate: '2019/01/25',
      postDate: '2018/06/28',
      companyId: '5b5fdf59affce2221cd5d13f',
    },
    {
      title: 'Chief Design Engineer',
      description:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
      salary: 5347.47,
      startDate: '2019/05/19',
      postDate: '2018/08/25',
      companyId: '5b5fdf59affce2221cd5d142',
    },
    {
      title: 'Technical Writer',
      description:
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
      salary: 9539.99,
      startDate: '2018/12/25',
      postDate: '2018/06/12',
      companyId: '5b5fdf59affce2221cd5d13c',
    },
    {
      title: 'VP Accounting',
      description:
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
      salary: 7609.85,
      startDate: '2019/07/13',
      postDate: '2018/08/11',
      companyId: '5b5fdf59affce2221cd5d142',
    },
    {
      title: 'Analog Circuit Design manager',
      description:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
      salary: 8529.72,
      startDate: '2019/04/12',
      postDate: '2018/07/21',
      companyId: '5b5fdf59affce2221cd5d13e',
    },
    {
      title: 'Web Designer II',
      description:
        'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
      salary: 5673.35,
      startDate: '2018/11/10',
      postDate: '2018/07/11',
      companyId: '5b5fdf59affce2221cd5d145',
    },
    {
      title: 'Senior Sales Associate',
      description:
        'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
      salary: 797.17,
      startDate: '2018/09/16',
      postDate: '2018/08/11',
      companyId: '5b5fdf59affce2221cd5d140',
    },
    {
      title: 'Account Coordinator',
      description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
      salary: 6369.64,
      startDate: '2019/07/05',
      postDate: '2018/08/06',
      companyId: '5b5fdf59affce2221cd5d145',
    },
    {
      title: 'Business Systems Development Analyst',
      description:
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
      salary: 6520.42,
      startDate: '2019/04/21',
      postDate: '2018/07/19',
      companyId: '5b5fdf59affce2221cd5d140',
    },
    {
      title: 'Staff Scientist',
      description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
      salary: 4465.54,
      startDate: '2019/03/30',
      postDate: '2018/06/05',
      companyId: '5b5fdf59affce2221cd5d142',
    },
    {
      title: 'Accounting Assistant IV',
      description:
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
      salary: 6721.04,
      startDate: '2019/07/19',
      postDate: '2018/08/09',
      companyId: '5b5fdf59affce2221cd5d13d',
    },
    {
      title: 'Senior Cost Accountant',
      description:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
      salary: 1589.94,
      startDate: '2019/04/13',
      postDate: '2018/07/08',
      companyId: '5b5fdf59affce2221cd5d141',
    },
    {
      title: 'Chief Design Engineer',
      description:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
      salary: 8034.89,
      startDate: '2019/04/27',
      postDate: '2018/06/25',
      companyId: '5b5fdf59affce2221cd5d13d',
    },
    {
      title: 'Human Resources Assistant IV',
      description:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      salary: 2974.88,
      startDate: '2018/10/28',
      postDate: '2018/07/20',
      companyId: '5b5fdf59affce2221cd5d141',
    },
    {
      title: 'Developer I',
      description:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
      salary: 841.32,
      startDate: '2019/03/27',
      postDate: '2018/08/19',
      companyId: '5b5fdf59affce2221cd5d144',
    },
    {
      title: 'General Manager',
      description:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      salary: 9458.49,
      startDate: '2019/03/03',
      postDate: '2018/06/30',
      companyId: '5b5fdf59affce2221cd5d13d',
    },
    {
      title: 'Compensation Analyst',
      description:
        'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
      salary: 5873.78,
      startDate: '2018/08/19',
      postDate: '2018/07/11',
      companyId: '5b5fdf59affce2221cd5d144',
    },
    {
      title: 'Pharmacist',
      description:
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      salary: 6695.48,
      startDate: '2018/12/08',
      postDate: '2018/07/02',
      companyId: '5b5fdf59affce2221cd5d140',
    },
    {
      title: 'Executive Secretary',
      description:
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
      salary: 9645.7,
      startDate: '2018/12/09',
      postDate: '2018/06/17',
      companyId: '5b5fdf59affce2221cd5d13c',
    },
    {
      title: 'Speech Pathologist',
      description:
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
      salary: 5876.87,
      startDate: '2018/08/02',
      postDate: '2018/06/18',
      companyId: '5b5fdf59affce2221cd5d13e',
    },
    {
      title: 'Programmer I',
      description:
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
      salary: 820.43,
      startDate: '2018/08/03',
      postDate: '2018/07/31',
      companyId: '5b5fdf59affce2221cd5d13e',
    },
    {
      title: 'Quality Engineer',
      description:
        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
      salary: 8917.68,
      startDate: '2018/08/15',
      postDate: '2018/08/05',
      companyId: '5b5fdf59affce2221cd5d140',
    },
    {
      title: 'Staff Scientist',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
      salary: 8072.38,
      startDate: '2018/12/28',
      postDate: '2018/08/11',
      companyId: '5b5fdf59affce2221cd5d143',
    },
    {
      title: 'Administrative Assistant II',
      description:
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
      salary: 4406.11,
      startDate: '2019/06/19',
      postDate: '2018/06/20',
      companyId: '5b5fdf59affce2221cd5d142',
    },
    {
      title: 'Research Associate',
      description:
        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
      salary: 1891.65,
      startDate: '2018/11/03',
      postDate: '2018/06/23',
      companyId: '5b5fdf59affce2221cd5d13f',
    },
    {
      title: 'Human Resources Assistant IV',
      description:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
      salary: 8123.13,
      startDate: '2019/02/07',
      postDate: '2018/07/11',
      companyId: '5b5fdf59affce2221cd5d13e',
    },
    {
      title: 'Programmer Analyst IV',
      description:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
      salary: 6481.31,
      startDate: '2019/01/31',
      postDate: '2018/07/12',
      companyId: '5b5fdf59affce2221cd5d145',
    },
    {
      title: 'Operator',
      description:
        'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
      salary: 3891.02,
      startDate: '2019/06/26',
      postDate: '2018/08/12',
      companyId: '5b5fdf59affce2221cd5d13f',
    },
    {
      title: 'Staff Scientist',
      description:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
      salary: 4716.17,
      startDate: '2019/03/21',
      postDate: '2018/08/18',
      companyId: '5b5fdf59affce2221cd5d13f',
    },
    {
      title: 'Executive Secretary',
      description:
        'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
      salary: 885.85,
      startDate: '2019/03/18',
      postDate: '2018/07/23',
      companyId: '5b5fdf59affce2221cd5d140',
    },
    {
      title: 'Marketing Manager',
      description:
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
      salary: 1553.14,
      startDate: '2019/06/17',
      postDate: '2018/06/22',
      companyId: '5b5fdf59affce2221cd5d145',
    },
    {
      title: 'Software Consultant',
      description:
        'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
      salary: 1582.84,
      startDate: '2018/08/25',
      postDate: '2018/08/26',
      companyId: '5b5fdf59affce2221cd5d143',
    },
    {
      title: 'Actuary',
      description:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
      salary: 5824.75,
      startDate: '2019/01/28',
      postDate: '2018/06/16',
      companyId: '5b5fdf59affce2221cd5d13f',
    },
    {
      title: 'Desktop Support Technician',
      description:
        'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
      salary: 6904.24,
      startDate: '2019/04/29',
      postDate: '2018/08/06',
      companyId: '5b5fdf59affce2221cd5d13e',
    },
    {
      title: 'Food Chemist',
      description:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
      salary: 4056.72,
      startDate: '2019/04/26',
      postDate: '2018/08/06',
      companyId: '5b5fdf59affce2221cd5d13e',
    },
    {
      title: 'VP Accounting',
      description:
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
      salary: 5488.79,
      startDate: '2019/06/04',
      postDate: '2018/08/07',
      companyId: '5b5fdf59affce2221cd5d144',
    },
    {
      title: 'Data Coordiator',
      description:
        'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
      salary: 1731.96,
      startDate: '2019/02/04',
      postDate: '2018/06/05',
      companyId: '5b5fdf59affce2221cd5d141',
    },
    {
      title: 'Developer II',
      description:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      salary: 3818.54,
      startDate: '2018/09/24',
      postDate: '2018/08/11',
      companyId: '5b5fdf59affce2221cd5d144',
    },
    {
      title: 'Senior Sales Associate',
      description:
        'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      salary: 6214.84,
      startDate: '2018/09/07',
      postDate: '2018/08/13',
      companyId: '5b5fdf59affce2221cd5d144',
    },
    {
      title: 'Professor',
      description:
        'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      salary: 4065.18,
      startDate: '2018/08/06',
      postDate: '2018/06/05',
      companyId: '5b5fdf59affce2221cd5d13e',
    },
    {
      title: 'Analyst Programmer',
      description:
        'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
      salary: 1571.0,
      startDate: '2019/01/28',
      postDate: '2018/06/06',
      companyId: '5b5fdf59affce2221cd5d13c',
    },
    {
      title: 'Staff Accountant II',
      description:
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
      salary: 1251.07,
      startDate: '2019/05/04',
      postDate: '2018/08/30',
      companyId: '5b5fdf59affce2221cd5d13f',
    },
    {
      title: 'Automation Specialist IV',
      description:
        'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
      salary: 9736.93,
      startDate: '2019/06/19',
      postDate: '2018/08/04',
      companyId: '5b5fdf59affce2221cd5d144',
    },
    {
      title: 'Safety Technician II',
      description:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
      salary: 2675.67,
      startDate: '2018/11/25',
      postDate: '2018/08/11',
      companyId: '5b5fdf59affce2221cd5d13e',
    },
    {
      title: 'Budget/Accounting Analyst III',
      description:
        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
      salary: 1779.04,
      startDate: '2018/12/07',
      postDate: '2018/06/25',
      companyId: '5b5fdf59affce2221cd5d13d',
    },
    {
      title: 'Senior Developer',
      description:
        'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
      salary: 4896.29,
      startDate: '2019/05/19',
      postDate: '2018/06/07',
      companyId: '5b5fdf59affce2221cd5d13e',
    },
    {
      title: 'Graphic Designer',
      description:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
      salary: 8922.38,
      startDate: '2018/09/30',
      postDate: '2018/06/25',
      companyId: '5b5fdf59affce2221cd5d13f',
    },
    {
      title: 'Sales Associate',
      description:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
      salary: 5190.8,
      startDate: '2018/10/26',
      postDate: '2018/08/02',
      companyId: '5b5fdf59affce2221cd5d13c',
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
