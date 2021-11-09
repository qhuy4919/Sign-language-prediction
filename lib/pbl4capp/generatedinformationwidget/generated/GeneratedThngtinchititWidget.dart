import 'package:flutter/material.dart';

/* Text Thông tin chi tiết
    Autogenerated by FlutLab FTF Generator
  */
class GeneratedThngtinchititWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => Navigator.pushNamed(context, '/GeneratedDetailWidget'),
      child: Align(
        alignment: Alignment.centerLeft,
        child: Text(
          '''          Thông tin chi tiết''',
          overflow: TextOverflow.visible,
          textAlign: TextAlign.left,
          style: TextStyle(
            height: 6.25,
            fontSize: 16.0,
            fontFamily: 'Roboto',
            fontWeight: FontWeight.w400,
            color: Color.fromARGB(255, 0, 0, 0),

            /* letterSpacing: 0.0, */
          ),
        ),
      ),
    );
  }
}
