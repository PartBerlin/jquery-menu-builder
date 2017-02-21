QUnit.test( "jquery-menu-builder test", function( assert ) {
    "use strict";
    $( "#menu" ).menuBuilder();
    var children = $( "#menu" ).children();
    assert.strictEqual( children.length, 1 );
    var ulElement = children.first();
    assert.ok( ulElement.is( "ul" ) );
    var liElements = ulElement.children();
    assert.strictEqual( liElements.length, 3 );
    var li1 = liElements.first();
    assert.ok( li1.is( "li" ) );
    assert.strictEqual( li1.html(), "1 Headline 1" );
    var li2 = li1.next();
    assert.ok( li2.is( "li" ) );
    assert.strictEqual( li2.html(), "2 Custom Headline 1-1" );
    var li3 = li2.next();
    assert.ok( li3.is( "li" ) );
    assert.strictEqual( li3.html(), "3 Headline 1-2" );
} );
