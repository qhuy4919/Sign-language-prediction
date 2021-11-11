import 'package:flutter/material.dart';
import 'package:flutterapp/pbl4capp/generatedhearingassitwidget/generated/GeneratedXinchobnWidget.dart';
import 'package:flutterapp/pbl4capp/generatedhearingassitwidget/generated/GeneratedGroup3Widget.dart';
import 'package:flutterapp/pbl4capp/generatedhearingassitwidget/generated/GeneratedGroup15Widget.dart';
import 'package:flutterapp/pbl4capp/generatedhearingassitwidget/generated/GeneratedRectangle6Widget.dart';
import 'package:flutterapp/pbl4capp/generatedhearingassitwidget/generated/GeneratedVIDEOWidget.dart';
import 'package:flutterapp/pbl4capp/generatedhearingassitwidget/generated/GeneratedGroup8Widget.dart';

/* Frame HearingAssit
    Autogenerated by FlutLab FTF Generator
  */
class GeneratedHearingAssitWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Material(
        child: ClipRRect(
      borderRadius: BorderRadius.zero,
      child: Container(
        width: 360.0,
        height: 640.0,
        decoration: BoxDecoration(
          border: Border.all(
            width: 1.0,
            color: Color.fromARGB(255, 0, 0, 0),
          ),
        ),
        child: Stack(
            fit: StackFit.expand,
            alignment: Alignment.center,
            overflow: Overflow.visible,
            children: [
              ClipRRect(
                borderRadius: BorderRadius.zero,
                child: Container(
                  color: Color.fromARGB(255, 242, 242, 242),
                ),
              ),
              Positioned(
                left: 0.0,
                top: 30.0,
                right: null,
                bottom: null,
                width: 360.0,
                height: 400.0,
                child: GeneratedRectangle6Widget(),
              ),
              Positioned(
                left: 90.0,
                top: 105.0,
                right: null,
                bottom: null,
                width: 185.0,
                height: 175.0,
                child: GeneratedVIDEOWidget(),
              ),
              Positioned(
                left: 0.0,
                top: 0.0,
                right: null,
                bottom: null,
                width: 360.0,
                height: 30.0,
                child: GeneratedGroup3Widget(),
              ),
              Positioned(
                left: 0.0,
                top: 455.0,
                right: null,
                bottom: null,
                width: 360.0,
                height: 100.0,
                child: GeneratedGroup8Widget(),
              ),
              Positioned(
                left: 30.0,
                top: 465.0,
                right: null,
                bottom: null,
                width: 302.0,
                height: 82.0,
                child: GeneratedXinchobnWidget(),
              ),
              Positioned(
                left: 1.1368683772161603e-13,
                top: 580.0,
                right: null,
                bottom: null,
                width: 360.0,
                height: 60.0,
                child: GeneratedGroup15Widget(),
              )
            ]),
      ),
    ));
  }
}
