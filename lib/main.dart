import 'package:flutter/material.dart';
import 'package:flutterapp/pbl4capp/generatedloginwidget/GeneratedLoginWidget.dart';
import 'package:flutterapp/pbl4capp/generatedloginfailedwidget/GeneratedLoginFailedWidget.dart';
import 'package:flutterapp/pbl4capp/generatedloginfillwidget/GeneratedLoginFillWidget.dart';
import 'package:flutterapp/pbl4capp/generatedregisterwidget/GeneratedRegisterWidget.dart';
import 'package:flutterapp/pbl4capp/generatedhearingassitwidget/GeneratedHearingAssitWidget.dart';
import 'package:flutterapp/pbl4capp/generatedhomewidget/GeneratedHomeWidget.dart';
import 'package:flutterapp/pbl4capp/generatedinformationwidget/GeneratedInformationWidget.dart';
import 'package:flutterapp/pbl4capp/generatedlogoutwidget/GeneratedLogoutWidget.dart';
import 'package:flutterapp/pbl4capp/generatedhistorywidget/GeneratedHistoryWidget.dart';
import 'package:flutterapp/pbl4capp/generatedsavedvidwidget/GeneratedSavedVidWidget.dart';
import 'package:flutterapp/pbl4capp/generateddetailwidget/GeneratedDetailWidget.dart';
import 'package:flutterapp/pbl4capp/generateddetailsucwidget/GeneratedDetailSucWidget.dart';
import 'package:flutterapp/pbl4capp/generatedchangepasswidget/GeneratedChangePassWidget.dart';
import 'package:flutterapp/pbl4capp/generatedchangesucwidget/GeneratedChangeSucWidget.dart';
import 'package:flutterapp/pbl4capp/generatedregistersucwidget/GeneratedRegisterSucWidget.dart';
import 'package:flutterapp/pbl4capp/generatedmenuwidget/GeneratedMenuWidget.dart';

void main() {
  runApp(PBL4cApp());
}

class PBL4cApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: '/GeneratedLoginWidget',
      routes: {
        '/GeneratedLoginWidget': (context) => GeneratedLoginWidget(),
        '/GeneratedLoginFailedWidget': (context) =>
            GeneratedLoginFailedWidget(),
        '/GeneratedLoginFillWidget': (context) => GeneratedLoginFillWidget(),
        '/GeneratedRegisterWidget': (context) => GeneratedRegisterWidget(),
        '/GeneratedHearingAssitWidget': (context) =>
            GeneratedHearingAssitWidget(),
        '/GeneratedHomeWidget': (context) => GeneratedHomeWidget(),
        '/GeneratedInformationWidget': (context) =>
            GeneratedInformationWidget(),
        '/GeneratedLogoutWidget': (context) => GeneratedLogoutWidget(),
        '/GeneratedHistoryWidget': (context) => GeneratedHistoryWidget(),
        '/GeneratedSavedVidWidget': (context) => GeneratedSavedVidWidget(),
        '/GeneratedDetailWidget': (context) => GeneratedDetailWidget(),
        '/GeneratedDetailSucWidget': (context) => GeneratedDetailSucWidget(),
        '/GeneratedChangePassWidget': (context) => GeneratedChangePassWidget(),
        '/GeneratedChangeSucWidget': (context) => GeneratedChangeSucWidget(),
        '/GeneratedRegisterSucWidget': (context) =>
            GeneratedRegisterSucWidget(),
        '/GeneratedMenuWidget': (context) => GeneratedMenuWidget(),
      },
    );
  }
}
